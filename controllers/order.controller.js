import { OrderModel } from "../models/order.model.js";

export const getOrders = async (req, res) => {
    try {
        await OrderModel.find({}).populate({
            path: "staff_id",
            populate: {
                path: "role_id"
            }
        }).populate({
            path: "order_menu_id",
            populate: {
                path: "menu_item_id",
                populate:  [
                    {
                        path: "menu_ingredients_id",
                        populate: {
                            path: "ingredients_id"
                        }
                    },
                    {
                        path: "menu_id"
                    }
                ]
            }
        }).populate('table_id').then((data) => {
            res.json({ message: "Orders Get Successfully", data })
        }).catch((err) => {
            console.log(err);
            res.status(500).json({ error: "Data Not Get" });
        })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}
export const getOrder = async (req, res) => {
    try {
        let { id } = req.params
        await OrderModel.find({ _id: id }).populate({
            path: "staff_id",
            populate: {
                path: "role_id"
            }
        }).populate({
            path: "order_menu_id",
            populate:
            {
                path: "menu_item_id",
                populate: [
                    {
                        path: "menu_ingredients_id",
                        populate: {
                            path: "ingredients_id"
                        }
                    },
                    {
                        path: "menu_id"
                    }
                ]
            }

        }).populate('table_id').then((data) => {
            res.json({ message: "Order Get Successfully", data })
        }).catch((err) => {
            console.log(err);
            res.status(500).json({ error: "Data Not Get" });
        })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}
export const postOrder = async (req, res) => {
    try {
        let { staff_id, table_id, date, time, order_menu_id } = req.body
        let data = new OrderModel({
            staff_id, table_id, date, time, order_menu_id
        })
        await data.save();
        res.json({ message: "Order Successfully" })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}
export const putOrder = async (req, res) => {
    try {
        let { id } = req.params
        let data = req.body;
        await OrderModel.findByIdAndUpdate(id, data);
        res.json({ message: "Order Update Successfully" })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}
export const deleteOrder = async (req, res) => {
    try {
        let { id } = req.params
        await OrderModel.findByIdAndDelete(id);
        res.json({ message: "Order Delete Successfully" })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}