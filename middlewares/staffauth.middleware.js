import jwt from "jsonwebtoken";
import env from 'dotenv';
import { StaffModel } from "../models/staff.model.js";
env.config();
export const staffAuthLogin = async (req, res, next) => {
    try {

        let token = req.headers.authorization;

        if (token) {
            token = token.split(' ')[1];
            let data = jwt.verify(token, process.env.JWT_SECRET_KEY)
            let user = await StaffModel.findById(data.id).populate('role_id');
            req.user = user
            next();

        } else {
            res.status(401).json({ error: "unauthorization login..." })
        }
    } catch (err) {
        res.status(500).json({ error: 'Server Error' });
    }
}