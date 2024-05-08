
import mongoose from "mongoose";

const voucherSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: true
    }
});

export let VoucherModel = mongoose.model('Voucher', voucherSchema);


