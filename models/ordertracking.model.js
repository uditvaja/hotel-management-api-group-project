
import mongoose from "mongoose";

let ordertrackingSchema = new mongoose.Schema({
    order_id: {
        type: mongoose.Schema.Types.ObjectId,
        // ref: "online_order_id"
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
