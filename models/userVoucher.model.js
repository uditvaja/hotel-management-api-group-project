import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer",
        required: false
    },
    order_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order"
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
