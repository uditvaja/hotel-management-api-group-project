import mongoose from "mongoose";

let orderSchema = new mongoose.Schema({
    staff_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Staff"
    },
    table_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Table"
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    order_menu_id :{
        type: mongoose.Schema.Types.ObjectId,
        ref: "OrderMenu"
    }
})

export let OrderModel = mongoose.model("Order", orderSchema)