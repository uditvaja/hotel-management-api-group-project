import OnlineOrderModel from "../models/onlineorder.model.js";


export let getOrders = async (req, res) => {
    try {
        await OnlineOrderModel.find({}).populate({
            path: "order_menu_id",
            populate: {
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
        }).populate('customer_id').then((data) => {
            res.json({ message: "Online Orders Get Successfully", data })
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
        await OnlineOrderModel.find({ _id: id }).populate({
            path: "order_menu_id",
            populate: {
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
        }).populate('customer_id').then((data) => {
            res.json({ message: "Online Order Get Successfully", data })
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
        let { cash, online, order_menu_id, customer_id } = req.body
        let data = new OnlineOrderModel({
            cash, order_menu_id, online, customer_id
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
        await OnlineOrderModel.findByIdAndUpdate(id, data);
        res.json({ message: "Order Update Successfully" })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}

export const deleteOrder = async (req, res) => {
    try {
        let { id } = req.params
        await OnlineOrderModel.findByIdAndDelete(id);
        res.json({ message: "Order Delete Successfully" })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}