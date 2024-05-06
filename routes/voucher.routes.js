
import express from "express"
import { deleteVoucher, getVoucher, getVouchers, postVoucher, putVoucher } from "../controllers/voucher.controller.js";
let voucherRoutes = express()

voucherRoutes.get('/', getVouchers);
voucherRoutes.get('/:id', getVoucher);
voucherRoutes.post('/', postVoucher);
voucherRoutes.put('/:id', putVoucher);
voucherRoutes.delete('/:id', deleteVoucher);

export default voucherRoutes;