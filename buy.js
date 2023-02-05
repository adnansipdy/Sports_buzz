
function hello()
{
   var a=confirm("Are you sure you want to Puchase the product ?")
console.log(a);
if(a==true)
{
   alert("🙂🙂 Thank you for Purchasing ");
   window.open("http://localhost:3000/home","_self")
}else{
    alert("Try Some other Items from the site");
}

}

function hi()
{
    alert("Product has been added to cart");
    window.open("http://localhost:3000/home","_self")
}