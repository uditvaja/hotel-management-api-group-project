

import express from "express"
import { deleteMenuIngredients, getMenuIngredients, getMenuIngredientss, postMenuIngredients, putMenuIngredients } from "../controllers/menuingredients.controller.js"
let menuIngredientsRoutes = express()

menuIngredientsRoutes.get('/', getMenuIngredientss);
menuIngredientsRoutes.get('/:id', getMenuIngredients);
menuIngredientsRoutes.post('/', postMenuIngredients);
menuIngredientsRoutes.put('/:id', putMenuIngredients);
menuIngredientsRoutes.delete('/:id', deleteMenuIngredients);

export default menuIngredientsRoutes;