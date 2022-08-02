
var characte1 = document.getElementById("cha4")
var characte2 = document.getElementById("cha7")

var count = 50

window.onkeydown = function () {
    console.log(event.keyCode)
    if(event.keyCode == 68){
    characte1.src = "ch5.gif" 
    count +=  100 
    characte1.style.left = count + "px" ;
    setTimeout( function () {
     characte1.src = "ch4.gif"} , 500)
   }
   if(event.keyCode == 65){
    characte1.src = "ch5.gif" 
    count -=  100 
    characte1.style.left = count + "px" ;
    setTimeout( function () {
     characte1.src = "ch4.gif"} , 500)
   }
   if(event.keyCode == 83){
     characte1.src = "ch6.gif"
     setTimeout(function(){
      characte1.src = "ch4.gif"
     },500)
   }
   if(event.keyCode == 37){
    count +=  100 
    characte2.style.right = count + "px" ;
   }
   if(event.keyCode == 39){
     count-= 100 ;
     characte2.style.right = count + "px"
   }
   if(event.keyCode == 38){
    characte2.src = "ch8.gif"
    setTimeout(function(){
      characte2.src = "ch7.gif"
    
    },1000)
  }
 }