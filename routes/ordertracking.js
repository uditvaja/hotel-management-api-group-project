import express from "express";
import {
    getOrderTracking,
    getOrderTrackingById,
    createOrderTracking,
    updateOrderTracking,
    deleteOrderTracking
} from "../controllers/ordertracking.controller.js";

let orderTrackingRouter = express.Router();

orderTrackingRouter.get('/', getOrderTracking);
orderTrackingRouter.get('/:id', getOrderTrackingById);
orderTrackingRouter.post('/', createOrderTracking);
orderTrackingRouter.put('/:id', updateOrderTracking);
orderTrackingRouter.delete('/:id', deleteOrderTracking);

export default orderTrackingRouter;
