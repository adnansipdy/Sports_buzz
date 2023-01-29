//jshint esversion:6

const express = require('express');

const https = require("https");
let ejs = require('ejs');
const app = express();
app.use("view-engine","ejs");
const mongoose = require ('mongoose');


mongoose.connect("mongodb://localhost:27017/sprotsbuzz", {useNewUrlParser: true});


app.use(express.static("public"));

app.use(express.json()); 

app.use(express.static(__dirname));



app.get("/",function(req,res){
    
res.sendFile(__dirname+"/index.html");




});


app.post("/",function(req,res){
     
    const product_name=req.body.name;
    console.log(product_name);

if(product_name=="badmintion"){
var some="badmintion shoes"
res.render("products",{something:some})

}
else if(product_name=="cricket")
{


}

  
 

});



app.listen(3000,function(res){

console.log("server is workig a t local host 3000");

});
