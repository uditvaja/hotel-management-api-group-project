
import express from "express"
import { deleteMenuItem, getMenuItem, getMenuItems, postMenuItem, putMenuItem } from "../controllers/menuitem.controller.js"
let menuItemRoutes = express()

menuItemRoutes.get('/', getMenuItems);
menuItemRoutes.get('/:id', getMenuItem);
menuItemRoutes.post('/', postMenuItem);
menuItemRoutes.put('/:id', putMenuItem);
menuItemRoutes.delete('/:id', deleteMenuItem);

export default menuItemRoutes;