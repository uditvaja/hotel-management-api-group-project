import express from "express"
import bookingRoutes from "./booking.routes.js";
import customerRoutes from "./customer.routes.js";
import tableRoutes from "./table.routes.js";
import staffRoleRoutes from "./staffrole.routes.js";
import ingredientsRoutes from "./ingredients.routes.js";
import menuRoutes from "./menu.routes.js";
import orderRoutes from "./order.routes.js";
import orderMenuRoutes from "./ordermenu.routes.js";
import staffRoutes from "./staff.routes.js";
import menuIngredientsRoutes from "./menuingredients.routes.js";
import menuItemRoutes from "./menuitem.routes.js";
import userRoutes from "./user.routes.js";
import { authLogin } from "../middlewares/auth.middleware.js";
import { staffAuthLogin } from "../middlewares/staffauth.middleware.js";
import { roleService } from "../services/role.service.js";
import onlineorderRoutes from "./onlineorder.router.js";


let routes = express()

routes.get('/', (req, res) => {
    res.json({message: 'Welcome to the API'})
});
routes.use('/booking', bookingRoutes)
routes.use('/customer', customerRoutes)
routes.use('/table',staffAuthLogin ,roleService, tableRoutes)
routes.use('/staffrole',staffAuthLogin ,roleService, staffRoleRoutes)
routes.use('/ingredients',staffAuthLogin ,roleService, ingredientsRoutes)
routes.use('/menu', menuRoutes)
routes.use('/menuingredients', menuIngredientsRoutes)
routes.use('/order', orderRoutes)
routes.use('/ordermenu', orderMenuRoutes)
routes.use('/onlineorder', onlineorderRoutes)
routes.use('/staff',staffAuthLogin ,roleService, staffRoutes)
routes.use('/menuitem', menuItemRoutes)
routes.use('/auth', userRoutes)

export default routes