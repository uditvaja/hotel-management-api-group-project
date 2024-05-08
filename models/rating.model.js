import mongoose from "mongoose";

// Rating Schema
const ratingSchema = new mongoose.Schema({
    value: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    comment: {type : String},
    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer"
    }
});

export const RatingModel = mongoose.model("Rating", ratingSchema);