import OfferModel from "../models/offer.model.js";

export const getOffers = async (req, res) => {
    try {
        const data = await OfferModel.find({}).populate('menu_id');
        res.json({ message: "Offers get successfully", data });
    } catch (error) {
        console.error("Error retrieving offers:", error);
        res.status(500).json({ error: "Failed to retrieve offers" });
    }
}

export const getOffer = async (req, res) => {
    try {
        const { id } = req.params;
        const offer = await OfferModel.findById(id).populate('menu_id');
        if (!offer) {
            return res.status(404).json({ error: "Offer not found" });
        }
        res.json({ message: "Offer retrieved successfully", data: offer });
    } catch (error) {
        console.error("Error retrieving offer:", error);
        res.status(500).json({ error: "Failed to retrieve offer" });
    }
}

export const postOffer = async (req, res) => {
    try {
        const { name, description, discount, validity, menu_id } = req.body; // Added description here
        const newOffer = new OfferModel({ name, description, discount, validity, menu_id }); // Added description here
        await newOffer.save();
        res.status(201).json({ message: "Offer created successfully" });
    } catch (error) {
        console.error("Error creating offer:", error);
        res.status(500).json({ error: "Failed to create offer" });
    }
}

export const putOffer = async (req, res) => {
    try {
        const { id } = req.params;
        let data = req.body;
        const updatedOffer = await OfferModel.findByIdAndUpdate(id, data); // Added description here
        if (!updatedOffer) {
            return res.status(404).json({ error: "Offer not found" });
        }
        res.json({ message: "Offer updated successfully" });
    } catch (error) {
        console.error("Error updating offer:", error);
        res.status(500).json({ error: "Failed to update offer" });
    }
}

export const deleteOffer = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedOffer = await OfferModel.findByIdAndDelete(id);
        if (!deletedOffer) {
            return res.status(404).json({ error: "Offer not found" });
        }
        res.json({ message: "Offer deleted successfully" });
    } catch (error) {
        console.error("Error deleting offer:", error);
        res.status(500).json({ error: "Failed to delete offer" });
    }
}
