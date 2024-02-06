const mongoose = require("mongoose");
 mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("db connected");
 }).catch(()=>{
    console.log("db connection error");
 })