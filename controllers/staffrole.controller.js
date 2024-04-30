

import { StaffRoleModel } from "../models/staffrole.model.js";

export const getStaffRoles = async (req, res) => {
    try {
        await StaffRoleModel.find({}).then((data) => {
            res.json({ message: "StaffRoles Get Successfully", data })
        }).catch((err) => {
            console.log(err);
            res.status(500).json({ error: "Data Not Get" });
        })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}
export const getStaffRole = async (req, res) => {
    try {
        let { id } = req.params
        await StaffRoleModel.find({ _id: id }).then((data) => {
            res.json({ message: "StaffRole Get Successfully", data })
        }).catch((err) => {
            console.log(err);
            res.status(500).json({ error: "Data Not Get" });
        })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}
export const postStaffRole = async (req, res) => {
    try {
        let { role_description ,role} = req.body
        let data = new StaffRoleModel({
            role_description ,role
        })
        await data.save();
        res.json({ message: "StaffRole Successfully" })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}
export const putStaffRole = async (req, res) => {
    try {
        let { id } = req.params
        let data = req.body;
        await StaffRoleModel.findByIdAndUpdate(id, data);
        res.json({ message: "StaffRole Update Successfully" })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}
export const deleteStaffRole = async (req, res) => {
    try {
        let { id } = req.params
        await StaffRoleModel.findByIdAndDelete(id);
        res.json({ message: "StaffRole Delete Successfully" })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}