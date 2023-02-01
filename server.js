//jshint esversion:6
var product_name
var ProductsNames={

name1:"shoes",
name2:"rackets",
name3:"blank",
name4:"blank",
name5:"blank",
name6:"blank",
name7:"blank",
name8:"blank",
name9:"blank",
}
const express = require('express');
var some="badmintion shoes"
const https = require("https");

let ejs = require('ejs');
const app = express();
app.set("view engine","ejs");

// const mongoose = require ('mongoose');
// mongoose.connect("mongodb://localhost:27017/sprotsbuzz", {useNewUrlParser: true});


app.use(express.static("public"));

app.use(express.json()); 

app.use(express.static(__dirname));




app.get("/home",function(req,res){
    res.sendFile(__dirname+"/index.html");
});





app.post("/",function(req,res){
     
     product_name=req.body.name;
    console.log(product_name);

    res.send("thanks for the data ");


 

});











app.get("/products",(req,res)=>{

//     const sport = mongoose.modelNames("sports")
//     console.log(sport);

// sport.find((err,fruits)=>
// {

// if(err){

//     console.log(err);
// } else {

// console.log(fruits);

// }

// })


//     if(product_name == "volleyball")
// {

    

//     console.log("is this thing even working right now i dont know ");


// }
 
    res.render("products",{product1name : ProductsNames.name1,product2name:ProductsNames.name2,
        product3name : ProductsNames.name3,product4name : ProductsNames.name4,product5name : ProductsNames.name5,product6name : ProductsNames.name6,
        product7name : ProductsNames.name7,product8name : ProductsNames.name8,product9name : ProductsNames.name9
})
})





app.get("/names",(req,res)=>{

res.send("yo nice to mmet you brother ");

});







app.listen(3000,function(res){

console.log("Server is running at local host 300");

});
