

import express from "express"
import { deleteMenu, getMenu, getMenus, postMenu, putMenu } from "../controllers/menu.controller.js"
let menuRoutes = express()

menuRoutes.get('/', getMenus);
menuRoutes.get('/:id', getMenu);
menuRoutes.post('/', postMenu);
menuRoutes.put('/:id', putMenu);
menuRoutes.delete('/:id', deleteMenu);

export default menuRoutes;