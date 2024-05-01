

import express from "express"
import { deleteOrderMenu, getOrderMenu, getOrderMenus, postOrderMenu, putOrderMenu, userOrderMenu } from "../controllers/ordermenu.controller.js"
let orderMenuRoutes = express()

orderMenuRoutes.get('/', getOrderMenus);
orderMenuRoutes.get('/:id', getOrderMenu);
orderMenuRoutes.post('/', postOrderMenu);
orderMenuRoutes.put('/:id', putOrderMenu);
orderMenuRoutes.delete('/:id', deleteOrderMenu);
orderMenuRoutes.post('/userordermenu', userOrderMenu);

export default orderMenuRoutes;