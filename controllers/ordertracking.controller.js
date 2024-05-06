
import { ordertrackingModel } from "../models/ordertracking.model.js";


export const getOrderTracking = async (req, res) => {
    try {
        const orderTrackings = await ordertrackingModel.find();
        res.json(orderTrackings);
    } catch (error) {
        res.json({ message: error.message });
    }
};

export const getOrderTrackingById = async (req, res) => {
    const id = req.params.id;
    try {
        const orderTracking = await ordertrackingModel.findById(id);
        if (!orderTracking) {
            return res.json({ message: "Order tracking status not found" });
        }
        res.json(orderTracking);
    } catch (error) {
        res.json({ message: error.message });
    }
};


export const createOrderTracking = async (req, res) => {
    const orderTrackingData = req.body;
    try {
        const newOrderTracking = await ordertrackingModel.create(orderTrackingData);
        res.json(newOrderTracking);
    } catch (error) {
        res.json({ message: error.message });
    }
};


export const updateOrderTracking = async (req, res) => {
    const id = req.params.id;
    const updatedOrderTrackingData = req.body;
    try {
        const updatedOrderTracking = await ordertrackingModel.findByIdAndUpdate(id, updatedOrderTrackingData, { new: true });
        res.json(updatedOrderTracking);
    } catch (error) {
        res.json({ message: error.message });
    }
};

export const deleteOrderTracking = async (req, res) => {
    const id = req.params.id;
    try {
        await ordertrackingModel.findByIdAndDelete(id);
        res.json({msg:"order deleted susseful"})
    } catch (error) {
        res.json({ message: error.message });
    }
};
