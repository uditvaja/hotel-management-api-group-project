import mongoose from "mongoose";

let  customerSchema = new mongoose.Schema({
    first_name :{
        type : String,
        required : true
    },
    last_name:{
        type : String,
        required : true
    },
    phone_number:{
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true
    }
})

export let CustomerModel = mongoose.model("Customer",customerSchema)