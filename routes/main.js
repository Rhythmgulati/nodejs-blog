const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    const locals = {
        title:"1 blog",
        description:"this is first blog"
    }
    res.render("index",locals);
});

module.exports = router;