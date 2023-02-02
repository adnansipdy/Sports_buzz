//jshint esversion:6
var product_name
var ProductsNames={

name1:"no ",
name2:"rackets",
name3:"blank",
name4:"blank",
img1:"",
img2:" ",
img3:" ",
img4:" ",
}
const express = require('express');
var some="badmintion shoes"
const https = require("https");
const bodyParser = require('body-parser')
let ejs = require('ejs');
const app = express();
app.set("view engine","ejs");

const mongoose = require ('mongoose');
const { setMaxIdleHTTPParsers } = require('http');
mongoose.connect("mongodb://localhost:27017/sprotsbuzz", {useNewUrlParser: true});


app.use(express.static("public"));
app.use(bodyParser.urlencoded({extented:true}));
app.use(express.json()); 

app.use(express.static(__dirname));





var badimageSchema = new mongoose.Schema({
    name: String,
    source: String,
    img:
    {
        data: Buffer,
        contentType: String
    }
});
const badimg = mongoose.model("badimg",badimageSchema);


const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
  });


  const User = mongoose.model("User",userSchema);








var img11






// login page get funtion
app.get("/",function(req,res){

    res.sendFile(__dirname+"/login.html");
    badimg.find(function(err,imgs){

        if(err){
            console.log(err);
        }
        else{
            img11= imgs[0].source; 
         console.log(img11); 
        }
    })
    
    console.log(img11);
    
    
    });

    // login page post funtion
    app.post("/",function(req,res){
      var username=req.body.name;  
        var emailid=req.body.email;
        var emailpassword=req.body.password;
        console.log(username,emailid,emailpassword);

        const user = new User({

            name:username,
            email:emailid,
            password:emailpassword
            })
        


User.find(function(err,persons){

    if(err){
        console.log(err);
    }
    else{
        console.log(persons);
    }
})
user.save();
       
        res.redirect("http://localhost:3000/home");

        
        


        
    });        

    


















// home page get function 
app.get("/home",function(req,res){
    res.sendFile(__dirname+"/home.html");
});




// home page post function.
app.post("/home",function(req,res){
     
     product_name=req.body.name;
    console.log(product_name);

    res.send("thanks for the data ");


    
 if(product_name=="badmintion")
 {

     


 }


 

});









// product page get funtion.

app.get("/Products",(req,res)=>{



    


res.render("products",{product1name : ProductsNames.name1,product2name:ProductsNames.name2,
        product3name : ProductsNames.name3,product4name : ProductsNames.name4,img1:img11})
console.log(img11);
res.end();
   
})










app.listen(3000,function(res){

console.log("Server is running at local host 300");

});
