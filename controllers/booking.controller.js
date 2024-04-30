import { BookingModel } from "../models/booking.model.js";
import mongoose from "mongoose";


export const getBookings = async (req, res) => {
    try {
        await BookingModel.find({}).populate("table_id").populate("customer_id").then((data) => {
            res.json({ message: "Bookings Get Successfully", data })
        }).catch((err) => {
            console.log(err);
            res.status(500).json({ error: "Data Not Get" });
        })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}
export const getBooking = async (req, res) => {
    try {
        let { id } = req.params
        await BookingModel.find({ _id: id }).populate("table_id").populate("customer_id").then((data) => {
            res.json({ message: "Booking Get Successfully", data })
        }).catch((err) => {
            console.log(err);
            res.status(500).json({ error: "Data Not Get" });
        })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}
export const postBooking = async (req, res) => {
    try {
        let { table_id, customer_id, date, time, person } = req.body
        let data = new BookingModel({
            table_id, customer_id, date, time, person
        })
        await data.save();
        res.json({ message: "Booking Successfully" })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}
export const putBooking = async (req, res) => {
    try {
        let { id } = req.params
        let data = req.body;
        await BookingModel.findByIdAndUpdate(id, data);
        res.json({ message: "Booking Update Successfully" })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}
export const deleteBooking = async (req, res) => {
    try {
        let { id } = req.params
        await BookingModel.findByIdAndDelete(id);
        res.json({ message: "Booking Delete Successfully" })
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
}