
   document.getElementById("zero").addEventListener("click",function(){
       
    document.getElementById("display").value +="0"   
       
   })


   document.getElementById("onebtn").addEventListener("click",function(){
       
    document.getElementById("display").value +="1"   
       
   })

   document.getElementById("twobtn").addEventListener("click",function(){
       
    document.getElementById("display").value +="2"   
       
   })

   document.getElementById("threebtn").addEventListener("click",function(){
       
    document.getElementById("display").value +="3"   
       
   })

   document.getElementById("fourbtn").addEventListener("click",function(){
       
    document.getElementById("display").value +="4"   
       
   })

   document.getElementById("fivebtn").addEventListener("click",function(){
       
    document.getElementById("display").value +="5"   
       
   })

   document.getElementById("sixbtn").addEventListener("click",function(){
       
    document.getElementById("display").value +="6"   
       
   })

   document.getElementById("sevenbtn").addEventListener("click",function(){
       
    document.getElementById("display").value +="7"   
       
   })

   document.getElementById("eightbtn").addEventListener("click",function(){
       
    document.getElementById("display").value +="8"   
       
   })


   document.getElementById("ninebtn").addEventListener("click",function(){
       
    document.getElementById("display").value +="9"   
       
   })
   document.getElementById("point").addEventListener("click",function(){
       
    document.getElementById("display").value +="."   
       
   })
   document.getElementById("plus").addEventListener("click",function(){
       
    document.getElementById("display").value +="+"   
       
   })
   document.getElementById("minus").addEventListener("click",function(){
       
    document.getElementById("display").value +="-"   
       
   })
   document.getElementById("multiply").addEventListener("click",function(){
       
    document.getElementById("display").value +="*"   
       
   })
   document.getElementById("divide").addEventListener("click",function(){
       
    document.getElementById("display").value +="/"   
       
   })

document.getElementById("equalbtn").addEventListener("click",function(){
    
    document.getElementById("display").value= eval(document.getElementById("display").value)
    
})

  document.getElementById("reset").addEventListener("click",function(){
       
    document.getElementById("display").value =""   
       
   })
  document.getElementById("delete").addEventListener("click",function(){
    
    newinput= document.getElementById("display").value.slice(0,-1)
        
        
      document.getElementById("display").value= newinput;
        
    
       
   })

document.addEventListener("keypress",function(){
    
    console.log(event.key);
    
    switch(event.key){
            
        case "0":
       
    document.getElementById("display").value +="0"  ;    
   
            break;
       case "1":
       
    document.getElementById("display").value +="1"  ;    
   
            break;        
   case "2":
       
    document.getElementById("display").value +="2"  ;    
   
            break;
   case "3":
       
    document.getElementById("display").value +="3"  ;    
   
            break;
               case "4":
       
    document.getElementById("display").value +="4"  ;    
   
            break;
               case "5":
       
    document.getElementById("display").value +="5"  ;    
   
            break;
               case "6":
       
    document.getElementById("display").value +="6"  ;    
   
            break;
               case "7":
       
    document.getElementById("display").value +="7"  ;    
   
            break;
               case "8":
       
    document.getElementById("display").value +="8"  ;    
   
            break;
            
               case "9":
       
    document.getElementById("display").value +="9"  ;    
   
            break;
        
               case ".":
       
    document.getElementById("display").value +="."  ;    
   
            break; 
            
            
        
               case "+":
       
    document.getElementById("display").value +="+"  ;    
   
            break;   
            
            
               case "-":
       
    document.getElementById("display").value +="-"  ;    
   
            break;    
            
            
               case "*":
       
    document.getElementById("display").value +="*"  ;    
   
            break;    
                
               case "/":
       
    document.getElementById("display").value +="/"  ;    
   
            break;
        case "=":
            document.getElementById("display").value= eval(document.getElementById("display").value)
            break;
            
    }
    
    
})

