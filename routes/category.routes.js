import express from "express"
import { deletecategory, getcategory, getcategorys, postcategory, putcategory } from "../controllers/category.controller.js"
let categoryRoutes = express()

categoryRoutes.get('/', getcategorys);
categoryRoutes.get('/:id', getcategory);
categoryRoutes.post('/', postcategory);
categoryRoutes.put('/:id', putcategory);
categoryRoutes.delete('/:id', deletecategory);

export default categoryRoutes;