
import mongoose from "mongoose";

let ordertrackingSchema = new mongoose.Schema({
    online_order_id :{
        type: mongoose.Schema.Types.ObjectId,
        ref: "OnlineOrder"
    },
    orderdone: {
        type: String,
        default: true
    },
    preparing: {
        type: String,
        default: false
    },
    pickup: {
        type: String,
        default: false
    },
    out_of_delivery: {
        type: String,
        default: false
    },
    delivered: {
        type: String,
        default: false
    }
});

export const ordertrackingModel = mongoose.model("ordertracking", ordertrackingSchema);
