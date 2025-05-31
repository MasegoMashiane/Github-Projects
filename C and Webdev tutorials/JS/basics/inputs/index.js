//1. window prompt
//2.html textbox
/*players = []
const username1 = window.prompt("What's your name")
const username2 = window.prompt("what's your name")

function name(){
players.push("P1: "+ username1)
players.push(" P2: "+ username2)
console.log("Players: " + players)}

name()*/
let P1El = document.getElementById ("P1")
let P2El = document.getElementById ("P2")
let Players = []

/*P1.addEventListener("keypress", function(e){
    if (e.key === "Enter"){
        Players.push(P1.value)
    }
})

P2.addEventListener("keypress", function(e){
    if (e.key === "Enter"){
        Players.push(P2.value)
    }
})*/

function nam (){
    Players.push(P2El.value)
    Players.push(" and " + P1El.value)
    document.getElementById("text").textContent = `Hello:  ${Players}`
}
