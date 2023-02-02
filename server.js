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
des1:" ",
des2:" ",
des3:" ",
des4:" ",
price1:" ",
price2:" ",
price3:" ",
price4:" "
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










const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
  });


  const User = mongoose.model("User",userSchema);














// login page get funtion
app.get("/",function(req,res){

    res.sendFile(__dirname+"/login.html");
    
    
    
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
// images sort 
     ProductsNames.img1="Images\\badmintion\\1.jpg";
     ProductsNames.img2="Images\\badmintion\\bag1.jpg";
     ProductsNames.img3="Images\\badmintion\\rack1.jpg";
     ProductsNames.img4="Images\\badmintion\\shoes1.jpg";
// Name sort 
ProductsNames.name1=" Shuttles ";
ProductsNames.name2=" Kits ";
ProductsNames.name3=" Rackets ";
ProductsNames.name4=" Shoes ";

// Description 


// price sort
ProductsNames.price1="₹ 150";
ProductsNames.price2="₹ 700";
ProductsNames.price3="₹ 2500";
ProductsNames.price4="₹ 3000";

 }
 
 else if(product_name=="cricket")
 
 {

// images sort 
ProductsNames.img1="Images\\cricket\\bat3.jpg";
ProductsNames.img2="Images\\cricket\\ball2.jfif";
ProductsNames.img3="Images\\cricket\\h1.jfif";
ProductsNames.img4="Images\\cricket\\w2.jfif";
// Name sort 
ProductsNames.name1=" Bat ";
ProductsNames.name2=" Ball ";
ProductsNames.name3=" Helmet ";
ProductsNames.name4=" Padds ";

// Description 


// price sort
ProductsNames.price1="₹ 1500";
ProductsNames.price2="₹ 350";
ProductsNames.price3="₹ 700";
ProductsNames.price4="₹ 1200";


 }

 else if (product_name=="basketball")
 
 {

// images sort 
ProductsNames.img1="Images\\basketball\\b3.jpg";
ProductsNames.img2="Images\\basketball\\bas1.jpg";
ProductsNames.img3="Images\\basketball\\net1.jpg";
ProductsNames.img4="Images\\basketball\\j4.jfif";
// Name sort 
ProductsNames.name1=" Shoes  ";
ProductsNames.name2=" Ball ";
ProductsNames.name3=" Net ";
ProductsNames.name4=" Kobe Bryant Limited edition Jersery ";

// Description 


// price sort
ProductsNames.price1="₹ 7000";
ProductsNames.price2="₹ 1350";
ProductsNames.price3="₹ 2999";
ProductsNames.price4="₹ 10000";


 }


 
 else if(product_name=="cricket")
 
 {

// images sort 
ProductsNames.img1="Images\\cricket\\bat3.jpg";
ProductsNames.img2="Images\\cricket\\ball2.jfif";
ProductsNames.img3="Images\\cricket\\h1.jfif";
ProductsNames.img4="Images\\cricket\\w2.jfif";
// Name sort 
ProductsNames.name1=" Bat ";
ProductsNames.name2=" Ball ";
ProductsNames.name3=" Helmet ";
ProductsNames.name4=" Padds ";

// Description 


// price sort
ProductsNames.price1="₹ 1500";
ProductsNames.price2="₹ 350";
ProductsNames.price3="₹ 700";
ProductsNames.price4="₹ 1200";


 }

 else if (product_name=="Soccer")
 
 {

// images sort 
ProductsNames.img1="Images\\scoccer\\football1.jpg";
ProductsNames.img2="Images\\scoccer\\foot1.jpg";
ProductsNames.img3="Images\\scoccer\\b3.jpg";
ProductsNames.img4="Images\\scoccer\\j2.jpg";
// Name sort 
ProductsNames.name1=" Shoes  ";
ProductsNames.name2=" Cosco Art  ";
ProductsNames.name3=" Adidas Spark ";
ProductsNames.name4=" Messi Jersery ";

// Description 


// price sort
ProductsNames.price1="₹ 4999";
ProductsNames.price2="₹ 1499";
ProductsNames.price3="₹ 2999";
ProductsNames.price4="₹ 999";


 }




















 

});









// product page get funtion.

app.get("/Products",(req,res)=>{



    


res.render("products",{product1name : ProductsNames.name1,
                       product2name : ProductsNames.name2,
                       product3name : ProductsNames.name3,
                       product4name : ProductsNames.name4,
                       img1 : ProductsNames.img1,
                       img2 : ProductsNames.img2,
                       img3 : ProductsNames.img3,
                       img4 : ProductsNames.img4,
                       price1:ProductsNames.price1,
                       price2:ProductsNames.price2,
                       price3:ProductsNames.price3,
                       price4:ProductsNames.price4
                    
                    
                    
                    })

res.end();
   
})










app.listen(3000,function(res){

console.log("Server is running at local host 300");

});
