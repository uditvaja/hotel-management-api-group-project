

import express from "express"
import { deleteIngredients, getIngredients, getIngredientss, postIngredients, putIngredients } from "../controllers/ingredients.controller.js"
let ingredientsRoutes = express()

ingredientsRoutes.get('/', getIngredientss);
ingredientsRoutes.get('/:id', getIngredients);
ingredientsRoutes.post('/', postIngredients);
ingredientsRoutes.put('/:id', putIngredients);
ingredientsRoutes.delete('/:id', deleteIngredients);

export default ingredientsRoutes;