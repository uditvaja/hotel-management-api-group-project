

import express from "express"
import { deleteOrderMenu, getOrderMenu, getOrderMenus, postOrderMenu, putOrderMenu } from "../controllers/ordermenu.controller.js"
let orderMenuRoutes = express()

orderMenuRoutes.get('/', getOrderMenus);
orderMenuRoutes.get('/:id', getOrderMenu);
orderMenuRoutes.post('/', postOrderMenu);
orderMenuRoutes.put('/:id', putOrderMenu);
orderMenuRoutes.delete('/:id', deleteOrderMenu);

export default orderMenuRoutes;