import express from "express"
import { getOrders, postOrder , deleteOrder, getOrder, putOrder } from "../controllers/onlineorder.controller.js";
const onlineorderRoutes = express()

onlineorderRoutes.get("/", getOrders)
onlineorderRoutes.get('/:id',getOrder)
onlineorderRoutes.post('/',postOrder)
onlineorderRoutes.put('/:id', putOrder);
onlineorderRoutes.delete('/:id', deleteOrder);


export default onlineorderRoutes;