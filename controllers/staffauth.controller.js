import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import env from "dotenv"
import { StaffAuthModel } from "../models/staff.auth.model.js";
env.config()

export const staffSignIn = async (req ,res) =>{
    try {
        let {email ,password} = req.body;
        let user = await  StaffAuthModel.findOne({email});
        if(!user){
            return res.status(403).send({message : 'No User Found'})
        }else{
           let isValidPassword = await bcrypt.compare(password , user.password)
           if (!isValidPassword) {
               return res.status(403).send({ message : 'Please Check Your Password'})
           }
           let token = jwt.sign({ id : user.staff_id ,} , process.env.JWT_SECRET_KEY , { expiresIn: '2d' })
           res.header('auth-token' , token).json({message : "User Login Successfully", token})
        }
        
   
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server Error" });
    }
}