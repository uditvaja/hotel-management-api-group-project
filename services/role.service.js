import { StaffRoleModel } from "../models/staffrole.model.js";

export const roleService = async (req, res, next) => {
    let user = req.user;
    let role = await StaffRoleModel.findOne({ role: user.role_id.role });
    let allRole = role.role_access;
    for (const r in allRole) {
        if (req.originalUrl == `/${r}`) {
            if(allRole[r]){
                next();
            }else{
                res.status(401).json({ error: "unauthorization login..." })
            }
        }
    }

}