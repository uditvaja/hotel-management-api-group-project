import mongoose from "mongoose";

const customerRewardSchema = new mongoose.Schema({
    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer",
        required: false
    },
    order_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order"
    },
    voucher_id:{
        type : mongoose.Schema.Types.ObjectId,  
        ref:"Voucher" 
    },
    reward_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Reward"
    }
});


export let CustomerRewardModel = mongoose.model('CustomerReward', customerRewardSchema);
