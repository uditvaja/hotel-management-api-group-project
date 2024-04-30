import mongoose from "mongoose";
import env from "dotenv";
env.config()
let url = process.env.URL;

mongoose.connect(url).then(()=>{
    console.log('Database Connected Successfully...');
}).catch((err) =>{
    console.log(err);
})

export default mongoose;