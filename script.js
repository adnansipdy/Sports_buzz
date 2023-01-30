


var checking = {  }

$("#badmintion").click(function (e) { 
   e.preventDefault();

   checking={ }
   checking={

      name:"badmintion"
   }
   yo();
   
});

$("#cricket").click(function (e) { 
   e.preventDefault();

   checking={ }
   checking={

      name:"Cricket"
   }
   yo();
});

$("#basketball").click(function (e) { 
   e.preventDefault();

   checking={ }
   checking={

      name:"basketball"
   }
   yo();
});

$("#volleyball").click(function (e) { 
   e.preventDefault();

   checking={ }
   checking={

      name:"volleyball"
   }
   yo();
});
$("#hockey").click(function (e) { 
   e.preventDefault();

   checking={ }
   checking={

      name:"hockey"
   }
   yo();
});


function yo (){
  
   fetch("/",{
method : "POST",
headers : {
'Content-Type':'application/json'
},
body: JSON.stringify(checking)
})


window.open("http://localhost:3000/products","_self");


}









