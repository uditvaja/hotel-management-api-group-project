import express from "express"
import { deletecategory, getcategory, getcategorys, getcategorys, postcategory, postcategory, putcategory } from "../controllers/category.controller.js"
let categoryRoutes = express()

categoryRoutes.get('/', getcategory);
categoryRoutes.get('/:id', getcategorys);
categoryRoutes.post('/', postcategory);
categoryRoutes.put('/:id', putcategory);
categoryRoutes.delete('/:id', deletecategory);

export default categoryRoutes;