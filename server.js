//jshint esversion:6

const express = require('express');
const bodyparser=require("body-parser");
const https=require("https");

const app = express();

const mongoose = require ('mongoose');

mongoose.connect("mongodb://localhost:27017/sprotsbuzz", {useNewUrlParser: true});

const SportsSchema = new mongoose.Schema({
name: String,
Price:Number,
Description : String
});
const Sport=mongoose.model("Sport", SportsSchema);

const football = new Sport({
name : "ball",
Price:50,
Description:"holly shit if this works "

});

const football1= new Sport({
name : "bat",
Price : 150,
Description:"this should not work"

});


football.save();
football1.save();





Sport.find(function(err,sports){

if(err){
    console.log(err);

}
else
{
    for(i=0;i<sports.length;i++)
    {
        

    console.log(sports[i].name);
}

}
mongoose.connection.close();
});




















app.use(express.static("public"));


app.use(bodyparser.urlencoded({extented:true}));

app.use(express.static(__dirname));




























app.get("/",function(req,res){

res.sendFile(__dirname+"/index.html");
sadasd

});


app.listen(3000,function(res){

console.log("server is workig a t local host 3000");

});
