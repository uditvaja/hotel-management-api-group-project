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
import  offerRoutes  from "./offer.routes.js" // vishal
import menuTimeRoutes from "./menutime.routes.js"; // ajay
import onlineorderRoutes from "./onlineorder.router.js"; //parth
import ratingRoutes from "./rating.routes.js"; // Gautam
import waitlistRoutes from "./waitlist.routes.js"; // Harshal
import categoryRoutes from "./category.routes.js"; // Harshal
// import customerRewardsRoutes from "./customerRewards.routes.js"; // dvij
import userVoucherRoutes from "./userVoucher.routes.js"; // dvij
import voucherRoutes from "./voucher.routes.js"; // dvij
import rewardRoutes from "./reward.routes.js"; // dvij
import orderTrackingRouter from "./ordertracking.js"; // udit


let routes = express()

routes.get('/', (req, res) => {
    res.json({ message: 'Welcome to the API' })
});
routes.use('/booking', bookingRoutes)
routes.use('/customer', customerRoutes)
routes.use('/table',  tableRoutes)
routes.use('/staffrole',  staffRoleRoutes)
routes.use('/ingredients', ingredientsRoutes)
routes.use('/menu', menuRoutes)
routes.use('/menuingredients', menuIngredientsRoutes)
routes.use('/order', orderRoutes)
routes.use('/staff', staffRoutes)

routes.use('/ordermenu', orderMenuRoutes)
routes.use('/onlineorder', onlineorderRoutes)
routes.use('/staff', staffRoutes)

routes.use('/menuitem', menuItemRoutes)
routes.use('/offer',offerRoutes)
routes.use('/auth', userRoutes)
routes.use('/menutime', menuTimeRoutes);
routes.use('/rating', ratingRoutes)
routes.use('/category', categoryRoutes)
routes.use('/waitlist', waitlistRoutes)

routes.use('/ordertracking', orderTrackingRouter)

routes.use('/voucher', voucherRoutes)
routes.use('/uservoucher', userVoucherRoutes)
// routes.use('/customerRewards', customerRewardsRoutes)
routes.use('/reward', rewardRoutes)


export default routes