import jwt from "jsonwebtoken";
import env from 'dotenv';
env.config();
import { CustomerModel } from "../models/customer.model.js";
export const authLogin = async (req, res, next) => {
    try {

        let token = req.headers.authorization;

        if (token) {
            token = token.split(' ')[1];
            let data = jwt.verify(token, process.env.JWT_SECRET_KEY)

            let user = await CustomerModel.findById(data.customer_id);
            req.user = user;
            next();

        } else {
            res.status(401).json({ error: "unauthorization login..." })
        }
    } catch (err) {
        res.status(500).json({ error: 'Server Error' });
    }
}