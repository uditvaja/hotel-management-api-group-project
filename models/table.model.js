import mongoose from "mongoose";

let  tableSchema = new mongoose.Schema({
    table_number :{
        type : String,
        required : true
    },
    table_details:{
        type : String,
        required : true
    }
})

export let TableModel = mongoose.model("Table",tableSchema)