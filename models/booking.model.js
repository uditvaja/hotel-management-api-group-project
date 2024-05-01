import mongoose from "mongoose";

let bookingSchema = new mongoose.Schema({
    table_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Table"
    },
    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer"
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    person: {
        type: Number,
        required: true
    }
})

export let BookingModel = mongoose.model("Booking", bookingSchema)