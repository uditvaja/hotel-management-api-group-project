import mongoose from "mongoose";

let userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique : true
    },
    password: {
        type: String,
        required: true
    },
    customer_id :{
        type: mongoose.Schema.Types.ObjectId,
        ref : "Customer",
        required : false
    }
})

export let UserModel = mongoose.model("User", userSchema)