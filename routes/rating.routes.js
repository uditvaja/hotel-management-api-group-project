import express from "express";
import { createRating, deleteRating, getRating, getRatings, updateRating } from "../controllers/rating.controller.js";

const ratingRoutes = express.Router();

ratingRoutes.get('/', getRatings);
ratingRoutes.get('/:id', getRating);
ratingRoutes.post('/', createRating);
ratingRoutes.put('/:id', updateRating);
ratingRoutes.delete('/:id', deleteRating);

export default ratingRoutes;
