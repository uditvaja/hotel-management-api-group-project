// const mongoose = require('mongoose');
import mongoose from 'mongoose';


const serviceschema = new mongoose.Schema({
    time: {
        type: String,
        required: false
    },
    menu_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Menu'
    }]

});


export const servicemodel =mongoose.model("service",serviceschema);
