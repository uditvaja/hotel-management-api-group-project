import mongoose from "mongoose";

let ingredientsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

export let IngredientsModel = mongoose.model("Ingredients", ingredientsSchema)