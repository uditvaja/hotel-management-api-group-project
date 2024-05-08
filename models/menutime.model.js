import mongoose from 'mongoose';

const menuTimeschema = new mongoose.Schema({
    time: {
        type: String,
        required: false
    },
    menu_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Menu'
    }]

});


export const MenuTimeModel =mongoose.model("MenuTime",menuTimeschema);
