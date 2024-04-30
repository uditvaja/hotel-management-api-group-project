import express from "express"
import bookingRoutes from "./booking.routes.js";
let routes = express()

routes.get('/', (req, res) => {
    res.json({message: 'Welcome to the API'})
});
routes.use('/booking', bookingRoutes)

export default routes