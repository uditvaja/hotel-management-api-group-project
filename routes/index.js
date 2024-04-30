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
let routes = express()

routes.get('/', (req, res) => {
    res.json({message: 'Welcome to the API'})
});
routes.use('/booking', bookingRoutes)
routes.use('/customer', customerRoutes)
routes.use('/table', tableRoutes)
routes.use('/staffrole', staffRoleRoutes)
routes.use('/ingredients', ingredientsRoutes)
routes.use('/menu', menuRoutes)
routes.use('/menuingredients', menuIngredientsRoutes)
routes.use('/order', orderRoutes)
routes.use('/ordermenu', orderMenuRoutes)
routes.use('/staff', staffRoutes)
routes.use('/menuitem', menuItemRoutes)

export default routes