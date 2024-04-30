

import { TableModel } from "../models/table.model.js";

export const getTables = async (req, res) => {
    try {
        await TableModel.find({}).then((data) => {
            res.json({ message: "Tables Get Successfully", data })
        }).catch((err) => {
            console.log(err);
            res.status(500).json({ error: "Data Not Get" });
        })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}
export const getTable = async (req, res) => {
    try {
        let { id } = req.params
        await TableModel.find({ _id: id }).then((data) => {
            res.json({ message: "Table Get Successfully", data })
        }).catch((err) => {
            console.log(err);
            res.status(500).json({ error: "Data Not Get" });
        })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}
export const postTable = async (req, res) => {
    try {
        let {table_number , table_details} = req.body
        let data = new TableModel({
            table_number , table_details
        })
        await data.save();
        res.json({ message: "Table Successfully" })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}
export const putTable = async (req, res) => {
    try {
        let { id } = req.params
        let data = req.body;
        await TableModel.findByIdAndUpdate(id, data);
        res.json({ message: "Table Update Successfully" })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}
export const deleteTable = async (req, res) => {
    try {
        let { id } = req.params
        await TableModel.findByIdAndDelete(id);
        res.json({ message: "Table Delete Successfully" })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}