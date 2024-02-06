const express = require("express");
const router = express.Router();
const post = require("../models/post");

// function insertPostData(){
//     post.insertMany([
//         {
//             title:"building a blog",
//             body:"this is body text"
//         },
//         {
//             title:"building a blog",
//             body:"this is body text"
//         },
//         {
//             title:"building a blog",
//             body:"this is body text"
//         },
//         {
//             title:"building a blog",
//             body:"this is body text"
//         },
//         {
//             title:"building a blog",
//             body:"this is body text"
//         },
//         {
//             title:"building a blog",
//             body:"this is body text"
//         },
//         {
//             title:"building a blog",
//             body:"this is body text"
//         },
//         {
//             title:"building a blog",
//             body:"this is body text"
//         },
//     ])
// }
// insertPostData();

router.get("/",async (req,res)=>{
    try {
        const locals = {
title:"building a blog",
body:"this is body text"
        }
        const data = await post.find();
        console.log(data);
        res.render("index",{locals,data});
    } catch (error) {
        
    }
   
});



module.exports = router;