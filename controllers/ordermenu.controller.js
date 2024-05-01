

import { MenuIngredientsModel } from "../models/menuingredients.model.js";
import { MenuItemModel } from "../models/menuitem.model.js";
import { OrderMenuModel } from "../models/ordermenu.model.js";

export const getOrderMenus = async (req, res) => {
    try {
        await OrderMenuModel.find({}).populate({
            path: "menu_item_id",
            populate: {
                path: "menu_id"
            }
        }).populate({
            path: "menu_item_id",
            populate: {
                path: "menu_ingredients_id",
            }
        }).populate({
            path: "menu_item_id",
            populate: {
                path: "menu_ingredients_id",
                populate: {
                    path: "ingredients_id"
                }
            }
        }).then((data) => {
            res.json({ message: "OrderMenus Get Successfully", data })
        }).catch((err) => {
            console.log(err);
            res.status(500).json({ error: "Data Not Get" });
        })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}
export const getOrderMenu = async (req, res) => {
    try {
        let { id } = req.params
        await OrderMenuModel.find({ _id: id }).populate({
            path: "menu_item_id",
            populate: {
                path: "menu_id"
            }
        }).populate({
            path: "menu_item_id",
            populate: {
                path: "menu_ingredients_id",
            }
        }).populate({
            path: "menu_item_id",
            populate: {
                path: "menu_ingredients_id",
                populate: {
                    path: "ingredients_id"
                }
            }
        }).then((data) => {
            res.json({ message: "OrderMenu Get Successfully", data })
        }).catch((err) => {
            console.log(err);
            res.status(500).json({ error: "Data Not Get" });
        })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}
export const postOrderMenu = async (req, res) => {
    try {
        let { menu_item_id, quantity, comments } = req.body
        let data = new OrderMenuModel({
            menu_item_id, quantity, comments
        })
        await data.save();
        res.json({ message: "OrderMenu Successfully" })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}
export const putOrderMenu = async (req, res) => {
    try {
        let { id } = req.params
        let data = req.body;
        await OrderMenuModel.findByIdAndUpdate(id, data);
        res.json({ message: "OrderMenu Update Successfully" })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}
export const deleteOrderMenu = async (req, res) => {
    try {
        let { id } = req.params
        await OrderMenuModel.findByIdAndDelete(id);
        res.json({ message: "OrderMenu Delete Successfully" })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}

export const userOrderMenu = async (req, res) => {

    try {

        let { comments, quantity, menu } = req.body;
        let menuItemArr = [];

        try {
            for (let e of menu) {
                let arr = [];
                 for (const element of e.ingredients) {
                    try {
                        let menuIngredients = new MenuIngredientsModel({
                            ingredients_id: element.ingredients_id,
                            quantity: element.quantity
                        });

                        let a = await menuIngredients.save();
                        arr.push(a._id);
                    } catch (error) {
                        res.status(500).json({ error: "Server Error" });
                    }
                }

                try {
                    let menuItem = new MenuItemModel({
                        menu_ingredients_id: arr,
                        menu_id: e.menu_id
                    });
                    let b = await menuItem.save();
                    menuItemArr.push(b._id);
                } catch (error) {
                    res.status(500).json({ error: "Server Error" });
                }
            }
        } catch (error) {
            res.status(500).json({ error: "Server Error" });
        }


        let orderMenu = new OrderMenuModel({
            comments,
            quantity,
            menu_item_id: menuItemArr
        })
        let c = await orderMenu.save()
        if (c) {
            res.json({ message: "OrderMenu Add Successfully" })
        } else {
            res.status(500).json({ error: "Server Error" });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server Error" });
    }
}