// console.log(prompt("Choose a number between 1-10"))
let randomNumber = Math.ceil(Math.random()*10)
let won=false

for (i=0;i<3;i++){
    if(prompt("Choose a number between 1-10")==randomNumber){
        alert("ladys and gentlemen, you got it!")
        won=true
        i=3
    }
    if(!won){
        alert("WRONG!")
    }
}
if(!won){
    alert("you didn't get the number ("+randomNumber+"), try again with a new one.")
}
let solution = document.querySelector("p")
solution.after(randomNumber)