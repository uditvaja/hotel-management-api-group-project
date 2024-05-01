
import { populate } from "dotenv";
import { MenuIngredientsModel } from "../models/menuingredients.model.js";

export const getMenuIngredientss = async (req, res) => {
    try {
        await MenuIngredientsModel.find({}).populate('ingredients_id').then((data) => {
            res.json({ message: "MenuIngredientss Get Successfully", data })
        }).catch((err) => {
            console.log(err);
            res.status(500).json({ error: "Data Not Get" });
        })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}
export const getMenuIngredients = async (req, res) => {
    try {
        let { id } = req.params
        await MenuIngredientsModel.find({ _id: id }).populate('ingredients_id').then((data) => {
            res.json({ message: "MenuIngredients Get Successfully", data })
        }).catch((err) => {
            console.log(err);
            res.status(500).json({ error: "Data Not Get" });
        })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}
export const postMenuIngredients = async (req, res) => {
    try {
        let { ingredients_id , quantity} = req.body
        let data = new MenuIngredientsModel({
            ingredients_id , quantity
        })
        await data.save();
        res.json({ message: "MenuIngredients Successfully" })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}
export const putMenuIngredients = async (req, res) => {
    try {
        let { id } = req.params
        let data = req.body;
        await MenuIngredientsModel.findByIdAndUpdate(id, data);
        res.json({ message: "MenuIngredients Update Successfully" })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}
export const deleteMenuIngredients = async (req, res) => {
    try {
        let { id } = req.params
        await MenuIngredientsModel.findByIdAndDelete(id);
        res.json({ message: "MenuIngredients Delete Successfully" })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}