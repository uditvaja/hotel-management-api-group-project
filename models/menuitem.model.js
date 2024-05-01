import mongoose from "mongoose";

let menuItemSchema = new mongoose.Schema({
    menu_id :{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Menu"
    },
    menu_ingredients_id :[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "MenuIngredients"
    }]
})

export let MenuItemModel = mongoose.model("MenuItem", menuItemSchema)