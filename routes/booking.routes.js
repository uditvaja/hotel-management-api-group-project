import express from "express"
import { getBooking } from "../controllers/booking.controller.js"
let bookingRoutes = express()

bookingRoutes.get('/', getBooking);

export default bookingRoutes;