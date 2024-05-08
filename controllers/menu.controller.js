import { MenuModel } from "../models/menu.model.js";

export const getMenus = async (req, res) => {
    try {
        await MenuModel.find({}).populate('category_id').then((data) => {
            res.json({ message: "Menus Get Successfully", data })
        }).catch((err) => {
            console.log(err);
            res.status(500).json({ error: "Data Not Get" });
        })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}
export const getMenu = async (req, res) => {
    try {
        let { id } = req.params
        await MenuModel.find({ _id: id }).populate('category_id').then((data) => {
            res.json({ message: "Menu Get Successfully", data })
        }).catch((err) => {
            console.log(err);
            res.status(500).json({ error: "Data Not Get" });
        })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}
export const postMenu = async (req, res) => {
    try {
        let { price , title, description , category_id} = req.body
        let data = new MenuModel({
            price , title, description ,category_id
        })
        await data.save();
        res.json({ message: "Menu Successfully" })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}
export const putMenu = async (req, res) => {
    try {
        let { id } = req.params
        let data = req.body;
        await MenuModel.findByIdAndUpdate(id, data);
        res.json({ message: "Menu Update Successfully" })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}
export const deleteMenu = async (req, res) => {
    try {
        let { id } = req.params
        await MenuModel.findByIdAndDelete(id);
        res.json({ message: "Menu Delete Successfully" })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}