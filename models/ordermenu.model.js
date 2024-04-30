import mongoose from "mongoose";

let orderMenuSchema = new mongoose.Schema({
    comments: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    menu_item_id :[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "MenuItem"
    }]
})

export let OrderMenuModel = mongoose.model("OrderMenu", orderMenuSchema)