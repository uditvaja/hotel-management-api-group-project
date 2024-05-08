import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer",
    },
    voucher_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Voucher"
    },
    isActive: {
        type: Boolean,
        default: true
    },
    expirationDate: {
        type: Date,
        required: true
    }
});


export let UserVoucherModel = mongoose.model('UserVoucher', userSchema);
