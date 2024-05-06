import { RewardModel } from "../models/reward.model.js";


export const getRewards = async (req, res) => {
    try {
        await RewardModel.find({}).then((data) => {
            res.json({ message: "Rewards Get Successfully", data })
        }).catch((err) => {
            console.log(err);
            res.status(500).json({ error: "Data Not Get" });
        })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}
export const getReward = async (req, res) => {
    try {
        let { id } = req.params
        await RewardModel.find({ _id: id }).then((data) => {
            res.json({ message: "Reward Get Successfully", data })
        }).catch((err) => {
            console.log(err);
            res.status(500).json({ error: "Data Not Get" });
        })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}
export const postReward = async (req, res) => {
    try {
        let {order_id,rewardAmount} = req.body
        let data = new RewardModel({
            order_id,
            rewardAmount,
        })
        await data.save();
        res.json({ message: "Reward Successfully" })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}
export const putReward = async (req, res) => {
    try {
        let { id } = req.params
        let data = req.body;
        await RewardModel.findByIdAndUpdate(id, data);
        res.json({ message: "Reward Update Successfully" })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}
export const deleteReward = async (req, res) => {
    try {
        let { id } = req.params
        await VoucherModel.findByIdAndDelete(id);
        res.json({ message: "Reward Delete Successfully" })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}