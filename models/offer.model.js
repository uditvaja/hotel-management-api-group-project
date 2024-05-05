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
    offermain:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'OfferMain'
    }
});

const OfferModel = mongoose.model('Offer', offerSchema);

export default OfferModel;
