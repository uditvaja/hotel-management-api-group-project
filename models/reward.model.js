import mongoose from "mongoose";

const rewardSchema = new mongoose.Schema({
    order_id :{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order"
    },
    rewardAmount: {
        type: Number,
        required: true
    },
});


export let RewardModel = mongoose.model('Reward', rewardSchema);
