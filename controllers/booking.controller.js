import { BookingModel } from "../models/booking.model.js";

export const getBooking = async (req, res) => {
    try {
        await BookingModel.find({}).populate("table_id").populate("customer_id").populate("order_menu_id").then((data) => {
            res.json({ message: "Booking Get Successfully", data })
        }).catch((err) => {
            console.log(err);
            res.status(500).json({ error: "Data Not Get" });
        })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}