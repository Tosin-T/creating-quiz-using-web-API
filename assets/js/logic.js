
var startscreen= document.getElementById("start-screen")
var startB=document.getElementById('start')
startB.addEventListener("click",initiatetimer)
///// timer///
var timerdisplay=document.getElementById("time")
var timeleft= 100

function initiatetimer(){timerFunction= setInterval(function(){
  timeleft--
  timerdisplay.innerText=timeleft
  startscreen.style.visibility= 'hidden'
  if(timeleft==0){
    clearInterval(timerFunction)

  }
},1000)}

