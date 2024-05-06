
import express from "express"
import { deleteUserVoucher, getUserVoucher, getUserVouchers, postUserVoucher, putUserVoucher } from "../controllers/userVoucher.controller.js";
let userVoucherRoutes = express()

userVoucherRoutes.get('/', getUserVouchers);
userVoucherRoutes.get('/:id', getUserVoucher);
userVoucherRoutes.post('/', postUserVoucher);
userVoucherRoutes.put('/:id', putUserVoucher);
userVoucherRoutes.delete('/:id', deleteUserVoucher);

export default userVoucherRoutes;