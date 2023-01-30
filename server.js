//jshint esversion:6
var product_name
var firstProducts="SHoes for you guys"
const express = require('express');
var some="badmintion shoes"
const https = require("https");

let ejs = require('ejs');
const app = express();
app.set("view engine","ejs");
const mongoose = require ('mongoose');


mongoose.connect("mongodb://localhost:27017/sprotsbuzz", {useNewUrlParser: true});


app.use(express.static("public"));

app.use(express.json()); 

app.use(express.static(__dirname));




app.get("/",function(req,res){
    



    res.sendfile(__dirname+"/index.html");


});





app.post("/",function(req,res){
     
     product_name=req.body.name;
    console.log(product_name);

    res.send("thanks for the data ")


 

});




app.get("/products",(req,res)=>{

    res.render("products",{something:product_name,firstProduct:firstProducts})
})





app.listen(2000,function(res){

console.log("server is  not working workig a t local host 3000");

});
