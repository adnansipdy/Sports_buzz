
var yo=0;
const searchFocus = document.getElementById('search-focus');
 var  bad=0;
$( "#badmintion" ).on({
    
    
        
        "click": function() {    
        
                  bad=1;
                console.log(bad)

    
       yo=bad;
    
    }
        

    
    
    
});


console.log(bad);
if(yo==1)
{
   $("#product_name").text("badmintion catogry"); 
}

