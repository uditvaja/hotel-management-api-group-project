
import { CustomerModel } from "../models/customer.model.js";

export const getCustomers = async (req, res) => {
    try {
        await CustomerModel.find({}).then((data) => {
            res.json({ message: "Customers Get Successfully", data })
        }).catch((err) => {
            console.log(err);
            res.status(500).json({ error: "Data Not Get" });
        })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}
export const getCustomer = async (req, res) => {
    try {
        let { id } = req.params
        await CustomerModel.find({ _id: id }).then((data) => {
            res.json({ message: "Customer Get Successfully", data })
        }).catch((err) => {
            console.log(err);
            res.status(500).json({ error: "Data Not Get" });
        })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}
export const postCustomer = async (req, res) => {
    try {
        let { first_name, last_name, phone_number, email} = req.body
        let data = new CustomerModel({
            first_name, last_name, phone_number, email
        })
        await data.save();
        res.json({ message: "Customer Successfully" })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}
export const putCustomer = async (req, res) => {
    try {
        let { id } = req.params
        let data = req.body;
        await CustomerModel.findByIdAndUpdate(id, data);
        res.json({ message: "Customer Update Successfully" })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}
export const deleteCustomer = async (req, res) => {
    try {
        let { id } = req.params
        await CustomerModel.findByIdAndDelete(id);
        res.json({ message: "Customer Delete Successfully" })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}