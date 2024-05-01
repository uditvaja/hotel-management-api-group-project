

import express from "express"
import { deleteStaffRole, getStaffRole, getStaffRoles, postStaffRole, putStaffRole } from "../controllers/staffrole.controller.js"
let staffRoleRoutes = express()

staffRoleRoutes.get('/', getStaffRoles);
staffRoleRoutes.get('/:id', getStaffRole);
staffRoleRoutes.post('/', postStaffRole);
staffRoleRoutes.put('/:id', putStaffRole);
staffRoleRoutes.delete('/:id', deleteStaffRole);

export default staffRoleRoutes;