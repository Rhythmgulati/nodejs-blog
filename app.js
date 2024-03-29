require("dotenv").config({path:"./.env"});
require("./db/conn");
const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const PORT = process.env.PORT;
app.use(express.urlencoded({ extended: true }));
 

const staticPath = path.join(__dirname,"/public" )
app.use(express.static(staticPath));
const templatePath = path.join(__dirname,"/templates/views");
const partialPath = path.join(__dirname,"/templates/partials");
hbs.registerPartials(partialPath);
console.log(templatePath);


app.set("view engine","hbs");
app.set("views",templatePath)

app.use("/",require("./routes/main"));
app.use("/",require("./routes/admin"));


app.listen(PORT,()=>{
    console.log(`app listening on port ${PORT}`)
});
