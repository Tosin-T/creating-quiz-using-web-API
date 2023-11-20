var nameboxId=document.getElementById("namebox")
var saveId =document.getElementById("save")
var highscoreArray=[]
saveId.addEventListener("click", addDetails)
function addDetails(event){
    event.preventDefault()
console.log(nameboxId.value)
highscoreArray.push(nameboxId.value)
localStorage.setItem("names",JSON.stringify(highscoreArray))
var n=JSON.parse(localStorage.getItem("names"))

console.log(n)
for(i=0;i<n.length;i++){
    console.log(n[i])
}
}