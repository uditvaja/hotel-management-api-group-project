import mongoose from "mongoose";

let userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    customer_id :{
        type: mongoose.Schema.Types.ObjectId,
        ref : "Customer"
    }
})

export let UserModel = mongoose.model("User", userSchema)