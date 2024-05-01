

import express from "express"
import { deleteStaff, getStaff, getStaffs, postStaff, putStaff } from "../controllers/staff.controller.js"
let staffRoutes = express()

staffRoutes.get('/', getStaffs);
staffRoutes.get('/:id', getStaff);
staffRoutes.post('/', postStaff);
staffRoutes.put('/:id', putStaff);
staffRoutes.delete('/:id', deleteStaff);

export default staffRoutes;