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
body:"this is body text",
        }
        const data = await post.find();
        // console.log(data);
        res.render("index",{locals,data});
    } catch (error) {
        
    }
   
});

router.get('/post/:id',async (req,res)=>{
      try {
        const locals = {
            title:"building a blog",
            body:"this is body text",
                    }
        let _id = req.params.id;
        console.log(_id);
        console.log("hit")
        const data = await post.findOne({_id});
        console.log(data);
        res.render("post",{locals,data});

      } catch (error) {
        console.log(error);
      }
});



module.exports = router;