var qtitle= document.getElementById("question-title")
var buttonchoices=document.getElementById("choices")
var correctAnswers= 0;
var questionPosition=0;
var currentQuestion=''

var quizquestion=[{
    question: "which of these is used to notate 'or' ?",
    answers: {
        a: ["||",true],
        b: ["<",false],
        c: ["!",false],
        d: ["&",false],
    }
},{
    question: "what is my town?",
    answers: {
        a: ["c",true],
        b: ["f",false],
        c: ["f",false],
        d: ["f",false],
    }
},{
    question: "what is my car?",
    answers: {
        a: ["t",true],
        b: ["f",false],
        c: ["f",false],
        d: ["f",false],
    }
}]
console.log(quizquestion)
// var total questions:
// correct answers count var ''


function quizchecker(){
    currentQuestion =quizquestion[questionPosition]
    qtitle.append(currentQuestion.question)

    for(var key in currentQuestion.answers){
        let answer= currentQuestion.answers[key]
        let button = document.createElement("button")
    button.textContent=answer[0]
    button.setAttribute('data-key',key)
    buttonchoices.appendChild(button)
        console.log(answer)
    }
}



quizchecker()

buttonchoices.addEventListener("click",function(event){
    let answer=currentQuestion.answers[event.target.dataset.key]
    if (answer[1]==true){
        correctAnswers++;
        questionPosition++;
        
        if( questionPosition>=quizquestion.length){
            console.log("you finished!")
        }else{
        qtitle.innerHTML=''
        buttonchoices.innerHTML=''
            quizchecker()}
        
    }else{ 
        timeleft-=10
        questionPosition++;
        console.log("you suck")}
        if( questionPosition>=quizquestion.length){
            console.log("you finished!")
        }else{
        qtitle.innerHTML=''
        buttonchoices.innerHTML=''
            quizchecker()}
            
    })
    
// // declared variables
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