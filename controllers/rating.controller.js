import { RatingModel } from "../models/rating.model.js";

export const getRatings = async (req, res) => {
    try {
        const ratings = await RatingModel.find({}).populate('customer_id');
        res.json({ message: "Ratings fetched successfully", data: ratings });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch ratings" });
    }
};

export const getRating = async (req, res) => {
    try {
        const { id } = req.params;
        const rating = await RatingModel.findById({_id : id}).populate('customer_id');
        if (!rating) {
            return res.status(404).json({ error: "Rating not found" });
        }
        res.json({ message: "Rating fetched successfully", data: rating });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch rating" });
    }
};

export const createRating = async (req, res) => {
    try {
        const { value, comment, customer_id } = req.body;
        const newRating = new RatingModel({ value, comment, customer_id });
        await newRating.save();
        res.status(201).json({ message: "Rating created successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to create rating" });
    }
};

export const updateRating = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        await RatingModel.findByIdAndUpdate(id, updates);
        res.json({ message: "Rating updated successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to update rating" });
    }
};

export const deleteRating = async (req, res) => {
    try {
        const { id } = req.params;
        await RatingModel.findByIdAndDelete(id);
        res.json({ message: "Rating deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to delete rating" });
    }
};
