import express from "express";
import { deleteOffer, getOffer, getOffers, postOffer, putOffer } from "../controllers/offer.controller.js";

let offerRoutes = express();

offerRoutes.get('/', getOffers);
offerRoutes.get('/:id', getOffer);
offerRoutes.post('/', postOffer);
offerRoutes.put('/:id', putOffer);
offerRoutes.delete('/:id', deleteOffer);

export default offerRoutes;
