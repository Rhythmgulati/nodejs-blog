const express = require("express");
const router = express.Router();
const user = require("../models/users");
const bcrypt = require("bcrypt")
var jwt = require('jsonwebtoken');





const authMiddleware = (req,res,next)=>{
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({message:"unauthorised"});
    }
    
}










router.get("/admin",async (req,res)=>{
    try {
        res.render("admin_index");
    } catch (error) { 
        console.log(error);
    }
});
router.post("/admin",async(req,res)=>{
    try {
        const {username,password} = req.body;
          const userdata = await user.findOne({username:username});
        if(!user){
            return res.status(401).json({message:"invalid username"})
        }
        const isPassword = await bcrypt.compare(password,userdata.password);
        if (!isPassword){
              return res.status(401).json({message:"invalid password"});
        }
        const token = jwt.sign({userid:userdata._id},process.env.JWT_KEY);
        res.cookie( "token",token )
        res.redirect("/dashboard");

    } catch (error) {
        console.log(error);
    }
})
router.get("/dashboard",async(req,res)=>{
     res.render("dashboard");  
})
router.post("/newadmin",async(req,res)=>{
    try {
        const hashedpassword = await bcrypt.hash(req.body.password,10);
      const data =  await new  user({
            username:req.body.username,
            password:hashedpassword
        });
      await data.save();
        res.send("SAVED SUCCESFUL");
    } catch (error) {
        if(error.code === 11000){
            res.status(409).json({message:'user already in use'});
        }
        console.log(error);
    }
})
module.exports = router;