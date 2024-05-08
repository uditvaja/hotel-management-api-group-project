import express from "express";
import { deleteOrderTracking, getOrderTracking, getOrdersTracking, postOrderTracking, putOrderTracking } from "../controllers/ordertracking.controller.js";


let orderTrackingRouter = express.Router();

orderTrackingRouter.get('/', getOrdersTracking);
orderTrackingRouter.get('/:id', getOrderTracking);
orderTrackingRouter.post('/', postOrderTracking);
orderTrackingRouter.put('/:id', putOrderTracking);
orderTrackingRouter.delete('/:id', deleteOrderTracking);

export default orderTrackingRouter;
