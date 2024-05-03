import { CustomerModel } from "../models/customer.model.js";
import { UserModel } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import env from "dotenv"
env.config()

export const signUp = async (req, res) => {
    try {
        let { email, password } = req.body;
        let user = await UserModel.findOne({ email });
        if (user == null) {
            let data = new CustomerModel({
                email,
                password
            })
            let customerRes = await data.save().then(a => {
                return data._id;
            }).catch((err) => {
                res.status(500).json({ error: "Server Error" });
            });
            let saltRounds = 11;
            bcrypt.hash(password, saltRounds, async (err, hash) => {
                if (!err) {
                    let userData = new UserModel({
                        email,
                        password: hash,
                        customer_id: customerRes
                    })
                    await userData.save().then(b => {
                        res.json({ message: "User Create Successfully" });
                    }).catch(err => {
                        console.log(err);
                        res.status(500).json({ error: "Server Error" });
                    });
                } else {
                    res.status(401).json({ error: "server error" });

                }
            });
        } else {
            res.status(401).json({ error: "Email Already Exist" });
        }
    } catch (error) {
        res.status(500).json({ error: "Server Error" });

    }
}

export const signIn = async (req ,res) =>{
    try {
        let {email ,password} = req.body;
        let user = await  UserModel.findOne({email});
        if(!user){
            return res.status(403).send({message : 'No User Found'})
        }else{
           let isValidPassword = await bcrypt.compare(password , user.password)
           if (!isValidPassword) {
               return res.status(403).send({ message : 'Please Check Your Password'})
           }
           let token = jwt.sign({ id : user.customer_id ,} , process.env.JWT_SECRET_KEY , { expiresIn: '2d' })
           res.header('auth-token' , token).json({message : "User Login Successfully", token})
        }
        
   
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server Error" });
    }
}