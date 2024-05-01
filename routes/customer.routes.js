
import express from "express"
import { deleteCustomer, getCustomer, getCustomers, postCustomer, putCustomer } from "../controllers/customer.controller.js"
let customerRoutes = express()

customerRoutes.get('/', getCustomers);
customerRoutes.get('/:id', getCustomer);
customerRoutes.post('/', postCustomer);
customerRoutes.put('/:id', putCustomer);
customerRoutes.delete('/:id', deleteCustomer);

export default customerRoutes;