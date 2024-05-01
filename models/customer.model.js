import mongoose from "mongoose";

let  customerSchema = new mongoose.Schema({
    first_name :{
        type : String,
        required : false
    },
    last_name:{
        type : String,
        required : false
    },
    phone_number:{
        type : String,
        required : false
    },
    email:{
        type : String,
        required : true
    }
})

export let CustomerModel = mongoose.model("Customer",customerSchema)