

import express from "express"
import { deleteTable, getTable, getTables, postTable, putTable } from "../controllers/table.controller.js"
let tableRoutes = express()

tableRoutes.get('/', getTables);
tableRoutes.get('/:id', getTable);
tableRoutes.post('/', postTable);
tableRoutes.put('/:id', putTable);
tableRoutes.delete('/:id', deleteTable);

export default tableRoutes;