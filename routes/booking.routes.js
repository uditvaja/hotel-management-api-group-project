import express from "express"
import { deleteBooking, getBooking, getBookings, postBooking, putBooking } from "../controllers/booking.controller.js"
let bookingRoutes = express()

bookingRoutes.get('/', getBookings);
bookingRoutes.get('/:id', getBooking);
bookingRoutes.post('/', postBooking);
bookingRoutes.put('/:id', putBooking);
bookingRoutes.delete('/:id', deleteBooking);

export default bookingRoutes;