import mongoose from "mongoose";

// Rating Schema
const ratingSchema = new mongoose.Schema({
    value: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    comment: String,
    staff_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Staff"
    },
    menu_item_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MenuItem"
    },
    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export const RatingModel = mongoose.model("Rating", ratingSchema);