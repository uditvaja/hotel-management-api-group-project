

import express from "express"
import { deleteOrder, getOrder, getOrders, postOrder, putOrder } from "../controllers/order.controller.js"
let orderRoutes = express()

orderRoutes.get('/', getOrders);
orderRoutes.get('/:id', getOrder);
orderRoutes.post('/', postOrder);
orderRoutes.put('/:id', putOrder);
orderRoutes.delete('/:id', deleteOrder);

export default orderRoutes;