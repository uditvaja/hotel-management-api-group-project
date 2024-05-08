import mongoose from "mongoose";

const rewardSchema = new mongoose.Schema({
    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer",
    },
    rewardAmount: {
        type: Number,
        required: true
    },
});


export let RewardModel = mongoose.model('Reward', rewardSchema);
