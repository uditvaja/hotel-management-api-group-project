
import mongoose from "mongoose";

const voucherSchema = new mongoose.Schema({
    order_id :{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order"
    },
    amount: {
        type: Number,
        required: true
    },
    expirationDate: {
        type: Date,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
});

export let VoucherModel = mongoose.model('Voucher', voucherSchema);


