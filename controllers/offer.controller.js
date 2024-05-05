import OfferModel from "../models/offer.model.js";

export const getOffers = async (req, res) => {
    try {
        const offers = await OfferModel.find({}).populate('offermain');
        res.json({ message: "Offers retrieved successfully", data: offers });
    } catch (error) {
        console.error("Error retrieving offers:", error);
        res.status(500).json({ error: "Failed to retrieve offers" });
    }
}

export const getOffer = async (req, res) => {
    try {
        const { id } = req.params;
        const offer = await OfferModel.findById(id).populate('offermain');
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
        const { name, discount, validity, offermain } = req.body;
        const newOffer = new OfferModel({ name, discount, validity, offermain });
        await newOffer.save();
        res.status(201).json({ message: "Offer created successfully", data: newOffer });
    } catch (error) {
        console.error("Error creating offer:", error);
        res.status(500).json({ error: "Failed to create offer" });
    }
}

export const putOffer = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, discount, validity, offermain } = req.body;
        const updatedOffer = await OfferModel.findByIdAndUpdate(id, { name, discount, validity, offermain }, { new: true });
        if (!updatedOffer) {
            return res.status(404).json({ error: "Offer not found" });
        }
        res.json({ message: "Offer updated successfully", data: updatedOffer });
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
        res.json({ message: "Offer deleted successfully", data: deletedOffer });
    } catch (error) {
        console.error("Error deleting offer:", error);
        res.status(500).json({ error: "Failed to delete offer" });
    }
}
