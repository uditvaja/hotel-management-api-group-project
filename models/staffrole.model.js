import mongoose from "mongoose";

let  staffRoleSchema = new mongoose.Schema({
    role :{
        type : String,
        required : true
    },
    role_description:{
        type : String,
        required : true
    },
    role_access :{
        type : Object,
        required : true,
        default : {
            booking : false,
            customer : false,
            table : false,
            staffrole : false,
            ingredients : false,
            menu : false,
            menuingredients : false,
            order : false,
            ordermenu : false,
            staff : false,
            menuitem : false,
        }
    }
})

export let StaffRoleModel = mongoose.model("StaffRole",staffRoleSchema)