import { CustomerRewardModel } from "../models/customerRewards.model.js";



export const getCustomerRewards = async (req, res) => {
    try {
        await CustomerRewardModel.find({}).then((data) => {
            res.json({ message: "CustomersRewards Get Successfully", data })
        }).catch((err) => {
            console.log(err);
            res.status(500).json({ error: "Data Not Get" });
        })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}
export const getCustomerReward = async (req, res) => {
    try {
        let { id } = req.params
        await CustomerRewardModel.find({ _id: id }).then((data) => {
            res.json({ message: "CustomerReward Get Successfully", data })
        }).catch((err) => {
            console.log(err);
            res.status(500).json({ error: "Data Not Get" });
        })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}
export const postCustomerReward = async (req, res) => {
    try {
        let { customer_id,order_id,voucher_id,reward_id} = req.body
        let data = new CustomerRewardModel({
            customer_id,order_id,voucher_id,reward_id
        })
        await data.save();
        res.json({ message: "CustomerReward Successfully" })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}
export const putCustomerReward = async (req, res) => {
    try {
        let { id } = req.params
        let data = req.body;
        await CustomerRewardModel.findByIdAndUpdate(id, data);
        res.json({ message: "CustomerReward Update Successfully" })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}
export const deleteCustomerReward = async (req, res) => {
    try {
        let { id } = req.params
        await CustomerRewardModel.findByIdAndDelete(id);
        res.json({ message: "CustomerReward Delete Successfully" })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}