import mongoose from "mongoose";

let  staffSchema = new mongoose.Schema({
    first_name :{
        type : String,
        required : true
    },
    last_name:{
        type : String,
        required : true
    },
    role_id:{
        type : mongoose.Schema.Types.ObjectId,
        ref : "StaffRole"
    }
})

export let StaffModel = mongoose.model("Staff",staffSchema)