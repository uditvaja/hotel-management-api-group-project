
import { MenuItemModel } from "../models/menuitem.model.js";

export const getMenuItems = async (req, res) => {
    try {
        await MenuItemModel.find({}).populate("menu_id").populate({
            path: "menu_ingredients_id",
            populate: {
                path: "ingredients_id"
            }
        }).then((data) => {
            res.json({ message: "MenuItems Get Successfully", data })
        }).catch((err) => {
            console.log(err);
            res.status(500).json({ error: "Data Not Get" });
        })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}
export const getMenuItem = async (req, res) => {
    try {
        let { id } = req.params
        await MenuItemModel.find({ _id: id }).populate("menu_id").populate({
            path: "menu_ingredients_id",
            populate: {
                path: "ingredients_id"
            }
        }).then((data) => {
            res.json({ message: "MenuItem Get Successfully", data })
        }).catch((err) => {
            console.log(err);
            res.status(500).json({ error: "Data Not Get" });
        })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}
export const postMenuItem = async (req, res) => {
    try {
        let { menu_ingredients_id, menu_id } = req.body
        let data = new MenuItemModel({
            menu_ingredients_id, menu_id
        })
        await data.save();
        res.json({ message: "MenuItem Successfully" })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}
export const putMenuItem = async (req, res) => {
    try {
        let { id } = req.params
        let data = req.body;
        await MenuItemModel.findByIdAndUpdate(id, data);
        res.json({ message: "MenuItem Update Successfully" })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}
export const deleteMenuItem = async (req, res) => {
    try {
        let { id } = req.params
        await MenuItemModel.findByIdAndDelete(id);
        res.json({ message: "MenuItem Delete Successfully" })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}