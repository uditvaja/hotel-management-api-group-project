


import express from "express"
import { signIn, signUp } from "../controllers/user.controller.js";
let userRoutes = express()

userRoutes.post('/signup', signUp);
userRoutes.post('/signin', signIn);

export default userRoutes;