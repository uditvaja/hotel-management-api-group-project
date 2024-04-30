import db from "./config/db.js"
import express from "express"
import env from  'dotenv'
import routes from "./routes/index.js";
env.config();
let app  = express();
let port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/' ,routes)
app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})