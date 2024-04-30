import mongoose from "mongoose";

let  staffRoleSchema = new mongoose.Schema({
    role :{
        type : String,
        required : true
    },
    role_description:{
        type : String,
        required : true
    }
})

export let StaffRoleModel = mongoose.model("StaffRole",staffRoleSchema)