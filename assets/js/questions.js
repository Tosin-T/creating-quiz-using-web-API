var qtitle= document.getElementById("question-title")
var buttonchoices=document.getElementById("choices")
var correctAnswers= 0;
var questionPosition=0;
var currentQuestion=''
var retriveHighscores=JSON.parse(localStorage.getItem("playerHighscores"))||[]

var quizquestion=[{
    question: "which of these is used to notate 'or' ?",
    answers: {
        a: ["||",true],
        b: ["<",false],
        c: ["!",false],
        d: ["&",false],
    }
},{
    question: "The condition in an IF/Else statement is enclosed within ____",
    answers: {
        a: ["Parenthases",true],
        b: ["quotes",false],
        c: ["square brackets",false],
        d: ["curly brackets",false],
    }
},{
    question: "Arrays in JavaScript can be used to store ",
    answers: {
        a: ["all of the answers",true],
        b: ["other arrays",false],
        c: ["numbers and string",false],
        d: ["booleans",false],
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
            retriveHighscores.push(correctAnswers)
            localStorage.setItem("playerHighscores",JSON.stringify(retriveHighscores))
            window.location.replace("highscores.html")
        }else{
        qtitle.innerHTML=''
        buttonchoices.innerHTML=''
            quizchecker()}
        
    }else{ 
        timeleft-=10
        questionPosition++;
        }
        if( questionPosition>=quizquestion.length){
            window.location.replace("highscores.html")
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


  if(timeleft<=0){
    clearInterval(timerFunction)
    retriveHighscores.push(correctAnswers)
    localStorage.setItem("playerHighscores",JSON.stringify(retriveHighscores))
    alert("Times up!")
    window.location.replace("highscores.html")
    

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