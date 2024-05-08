
import { ordertrackingModel } from "../models/ordertracking.model.js";


export const getOrdersTracking = async (req, res) => {
    try {
        const orderTrackings = await ordertrackingModel.find({}).populate('online_order_id');
        res.json({message : "Orders Status Tracking Successfully" ,data :orderTrackings});
    } catch (error) {
        res.status(500).json({ error: "Server Error" });

    }
};

export const getOrderTracking = async (req, res) => {
    const id = req.params.id;
    try {
        const orderTracking = await ordertrackingModel.findById({ _id : id}).populate('online_order_id');
        if (!orderTracking) {
            return res.json({ message: "Order tracking status not found" });
        }
        res.json({message : "Order Status Tracking Successfully" ,data :orderTracking});

    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
};


export const postOrderTracking = async (req, res) => {
    const {online_order_id , orderdone ,preparing , pickup , out_of_delivery , delivered} = req.body;
    try {
        const data = new ordertrackingModel({
            online_order_id , orderdone ,preparing , pickup , out_of_delivery , delivered
        })
        await data.save();
        res.json({message : "Order Status Post Successfully"});
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
};


export const putOrderTracking = async (req, res) => {
    const id = req.params.id;
    const updatedOrderTrackingData = req.body;
    try {
        await ordertrackingModel.findByIdAndUpdate(id, updatedOrderTrackingData);
        res.json({message : "Order Status edit Successfully"});

    } catch (error) {
        res.status(500).json({ error: "Server Error" });

    }
};

export const deleteOrderTracking = async (req, res) => {
    const id = req.params.id;
    try {
        await ordertrackingModel.findByIdAndDelete(id);
        res.json({msg:"order Status deleted susseful"})
    } catch (error) {
        res.status(500).json({ error: "Server Error" });

    }
};
