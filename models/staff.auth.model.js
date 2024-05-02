import mongoose from "mongoose";

let staffAuthSchema = new mongoose.Schema({
    staff_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Table"
    },
    email: {
        type: String,
        ref: "Customer"
    },
    password: {
        type: String,
        required: true
    }
})

export let StaffAuthModel = mongoose.model("StaffAuth", staffAuthSchema)