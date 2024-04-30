import express from "express"
import env from  'dotenv'
import db from "./config/db.js"
env.config();
let app  = express();
let port = process.env.PORT;

app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})