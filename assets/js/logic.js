// declared variables
var startscreen= document.getElementById("start-screen")
var startB=document.getElementById('start')
var q= document.getElementById("questions")

console.log(q)
///// timer///
var timerdisplay=document.getElementById("time")
var timeleft= 100

function initiatetimer(){timerFunction= setInterval(function(){
  
  timeleft--
  timerdisplay.innerText=timeleft


  if(timeleft==0){
    clearInterval(timerFunction)

  }
},1000)}

function changevisibility(){
  q.className="visible"

}
function changevisibility2(){
  startscreen.style.visibility= 'hidden'  

}
// called functions
startB.addEventListener("click",initiatetimer)
startB.addEventListener("click",changevisibility)
startB.addEventListener("click",changevisibility2)