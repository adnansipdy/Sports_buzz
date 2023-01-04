//jshint esversion:6

const express = require('express');
const bodyparser=require("body-parser");
const https=require("https");

const app = express();
app.use(express.static("public"));


app.use(bodyparser.urlencoded({extented:true}));



app.get("/",function(req,res){

res.sendFile(__dirname+"/index.html");


});





app.listen(3000,function(res){

console.log("server is workig a t local host 3000");

});
