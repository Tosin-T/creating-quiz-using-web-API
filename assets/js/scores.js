var nameboxId=document.getElementById("namebox")
var saveId =document.getElementById("save")
var nameList=document.getElementById("highscores")
var createElement=document.createElement("ul")
var retriveNames=JSON.parse(localStorage.getItem("names"))||[]
var retriveHighscores=JSON.parse(localStorage.getItem("playerHighscores"))||[]
var clearEL= document.getElementById("clear")
var x=nameList.appendChild(createElement)


if(retriveNames.length>0){
    
    nameList.innerHTML=retriveNames.join("<br>")
    nameList.innerHTML+=("<br>")
    nameList.innerHTML+="High Scores"
    x.innerHTML=retriveHighscores.join("<br>")

console.log(document)
   

}
function addDetails(event){
    event.preventDefault()

    retriveNames.push(nameboxId.value)
    localStorage.setItem("names", JSON.stringify(retriveNames))
    nameList.innerHTML=retriveNames.join("<br>")
    
    nameList.innerHTML+=("<br>")
    x.innerHTML=retriveHighscores.join("<br>")
    return
  

// // for(i=0;i<retriveNames.length;i++){
// //     console.log(retriveNames[i])
// }
}
function clearResults(){
    retriveNames.splice(start=0, deleteCount=retriveNames.length)
    retriveHighscores.splice(start=0, deleteCount=retriveHighscores.length)
    nameList.innerHTML=retriveNames.join("<br>")
    localStorage.setItem("names", JSON.stringify(retriveNames));
    
    localStorage.setItem("playerHighscores",JSON.stringify(retriveHighscores));
    
    
}
saveId.addEventListener("click", addDetails)
clearEL.addEventListener("click",clearResults)

