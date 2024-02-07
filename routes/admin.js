const express = require("express");
const router = express.Router();
const user = require("../models/users");


router.get("/admin",async (req,res)=>{
    try {
        res.render("admin_index");
    } catch (error) {
        console.log(error);
    }
});
router.post("/admin",async(req,res)=>{
    try {
        
    } catch (error) {
        console.log(error);
    }
})
router.post("/newadmin",async(req,res)=>{
    try {
      const data =  await new  user({
            username:req.body.username,
            password:req.body.password
        });
      await data.save();
        res.send("SAVED SUCCESFUL");
    } catch (error) {
        console.log(error);
    }
})
module.exports = router;