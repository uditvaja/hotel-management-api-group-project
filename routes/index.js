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
import userVoucherRoutes from "./userVoucher.routes.js"; // dvij
import voucherRoutes from "./voucher.routes.js"; // dvij
import rewardRoutes from "./reward.routes.js"; // dvij
import orderTrackingRouter from "./ordertracking.js"; // udit





let routes = express()

routes.get('/', (req, res) => {
    res.json({ message: 'Welcome to the API' })
});
// if you use Authentication Api So Comment Open in This Api And Comment Without Use Middleware Api



// routes.use('/booking',authLogin, bookingRoutes)
// routes.use('/customer',staffAuthLogin , roleService, customerRoutes)
// routes.use('/table',staffAuthLogin , roleService,  tableRoutes)
// routes.use('/staffrole',staffAuthLogin , roleService,  staffRoleRoutes)
// routes.use('/ingredients',staffAuthLogin , roleService, ingredientsRoutes)
// routes.use('/menu',staffAuthLogin , roleService, menuRoutes)
// routes.use('/menuingredients',staffAuthLogin , roleService, menuIngredientsRoutes)
// routes.use('/order',authLogin, orderRoutes)
// routes.use('/staff',staffAuthLogin , roleService, staffRoutes)
// routes.use('/ordermenu',staffAuthLogin , roleService, orderMenuRoutes)
// routes.use('/onlineorder',staffAuthLogin , roleService, onlineorderRoutes)
// routes.use('/menuitem',staffAuthLogin , roleService, menuItemRoutes)
// routes.use('/offer',staffAuthLogin , roleService,offerRoutes)
// routes.use('/auth', userRoutes)
// routes.use('/menutime',staffAuthLogin , roleService, menuTimeRoutes);
// routes.use('/rating',authLogin, ratingRoutes)
// routes.use('/category',staffAuthLogin , roleService, categoryRoutes)
// routes.use('/waitlist',staffAuthLogin , roleService, waitlistRoutes)
// routes.use('/ordertracking',authLogin, orderTrackingRouter)
// routes.use('/voucher',authLogin, voucherRoutes)
// routes.use('/uservoucher',authLogin, userVoucherRoutes)
// routes.use('/reward',authLogin, rewardRoutes)



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
routes.use('/reward', rewardRoutes)


export default routes