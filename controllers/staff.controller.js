

import { StaffAuthModel } from "../models/staff.auth.model.js";
import { StaffModel } from "../models/staff.model.js";
import bcrypt from "bcrypt";


export const getStaffs = async (req, res) => {
    try {
        await StaffModel.find({}).populate('role_id').then((data) => {
            res.json({ message: "Staffs Get Successfully", data })
        }).catch((err) => {
            console.log(err);
            res.status(500).json({ error: "Data Not Get" });
        })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}
export const getStaff = async (req, res) => {
    try {
        let { id } = req.params
        await StaffModel.find({ _id: id }).populate('role_id').then((data) => {
            res.json({ message: "Staff Get Successfully", data })
        }).catch((err) => {
            console.log(err);
            res.status(500).json({ error: "Data Not Get" });
        })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}
export const postStaff = async (req, res) => {
    try {
        let { first_name, last_name, role_id, email, password } = req.body
        let data = new StaffModel({
            first_name, last_name, role_id
        })
        await data.save();

        let saltRounds = 11;
        if (data._id) {

            bcrypt.hash(password, saltRounds, async (err, hash) => {
                let staffUser = new StaffAuthModel({
                    email, password: hash, staff_id: data._id
                })
                await staffUser.save();
            })

            res.json({ message: "Staff add Successfully" })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server Error" });
    }
}
export const putStaff = async (req, res) => {
    try {
        let { id } = req.params
        let data = req.body;
        await StaffModel.findByIdAndUpdate(id, data);
        res.json({ message: "Staff Update Successfully" })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}
export const deleteStaff = async (req, res) => {
    try {
        let { id } = req.params
        await StaffModel.findByIdAndDelete(id);
        res.json({ message: "Staff Delete Successfully" })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}