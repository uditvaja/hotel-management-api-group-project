import mongoose from 'mongoose';

const offerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String, 
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
    validity: {
        type: String,
        required: true
    },
    menu_id :{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Menu"
    },
});

const OfferModel = mongoose.model('Offer', offerSchema);

export default OfferModel;
