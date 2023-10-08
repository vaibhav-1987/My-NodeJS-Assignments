
const app=require("./app")
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
dotenv.config();


const port = process.env.PORT||3000;
mongoose.connect(process.env.DATABASE)
    .then(()=>{
        console.log("db connected successfully")
        app.listen(port,()=>console.log(`listening to ${port}`))
    })
    .catch((err)=>console.log(err,"error in connecting to database"))