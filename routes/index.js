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
import serviceRoutes from "./serviceroutes.js";
import onlineorderRoutes from "./onlineorder.router.js";
import ratingRoutes from "./rating.routes.js";
import customerRewardsRoutes from "./customerRewards.routes.js";
import userVoucherRoutes from "./userVoucher.routes.js";
import voucherRoutes from "./voucher.routes.js";
import rewardRoutes from "./reward.routes.js";
import orderTrackingRouter from "./ordertracking.js";



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
routes.use('/service', serviceRoutes);
routes.use('/rating', ratingRoutes)

routes.use('/voucher', voucherRoutes)
routes.use('/uservoucher', userVoucherRoutes)
routes.use('/customerRewards', customerRewardsRoutes)
routes.use('/reward', rewardRoutes)


export default routes