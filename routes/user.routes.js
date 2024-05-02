


import express from "express"
import { signIn, signUp } from "../controllers/user.controller.js";
import { staffSignIn } from "../controllers/staffauth.controller.js";
let userRoutes = express()

userRoutes.post('/signup', signUp);
userRoutes.post('/signin', signIn);
userRoutes.post('/staffsignin', staffSignIn);

export default userRoutes;