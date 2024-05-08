import mongoose from "mongoose";

let menuSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    category_id :{
        type: mongoose.Schema.Types.ObjectId,
        ref : "Category"
    }
})

export let MenuModel = mongoose.model("Menu", menuSchema)