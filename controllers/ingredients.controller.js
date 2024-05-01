
import { IngredientsModel } from "../models/ingredients.model.js";

export const getIngredientss = async (req, res) => {
    try {
        await IngredientsModel.find({}).then((data) => {
            res.json({ message: "Ingredientss Get Successfully", data })
        }).catch((err) => {
            console.log(err);
            res.status(500).json({ error: "Data Not Get" });
        })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}
export const getIngredients = async (req, res) => {
    try {
        let { id } = req.params
        await IngredientsModel.find({ _id: id }).then((data) => {
            res.json({ message: "Ingredients Get Successfully", data })
        }).catch((err) => {
            console.log(err);
            res.status(500).json({ error: "Data Not Get" });
        })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}
export const postIngredients = async (req, res) => {
    try {
        let { title, description} = req.body
        let data = new IngredientsModel({
            title, description
        })
        await data.save();
        res.json({ message: "Ingredients Successfully" })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}
export const putIngredients = async (req, res) => {
    try {
        let { id } = req.params
        let data = req.body;
        await IngredientsModel.findByIdAndUpdate(id, data);
        res.json({ message: "Ingredients Update Successfully" })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}
export const deleteIngredients = async (req, res) => {
    try {
        let { id } = req.params
        await IngredientsModel.findByIdAndDelete(id);
        res.json({ message: "Ingredients Delete Successfully" })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}