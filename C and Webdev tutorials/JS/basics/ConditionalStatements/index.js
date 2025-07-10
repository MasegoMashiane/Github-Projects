let rand1 = Math.floor(Math.random()*13)+1
let rand2 = Math.floor(Math.random()*13)+1

let CardsNo = [];
let sum = 0;

let player = {
     Name: "Masego",
     Chips: 130
}


let playerEl = document.getElementById("player-El") 
let sumEl = document.querySelector("#Sum-El")
let CardsEl = document.querySelector("#Cards")
let messageEl = document.querySelector("#message-El")

let HasBlackJack = false
let IsAlive = false

playerEl.textContent = player.Name + ": R" + player.Chips


console.log("Is Alive: " + IsAlive)
console.log("Has Black Jack: " + HasBlackJack)

function randomNumber1(){
     
     if( rand1 === 1) {
          return 11 
     }
     else if ( rand1 > 10) {
          return 10
     }
      else {
          return rand1
     }
}

function randomNumber2(){

     if( rand2 === 1) {
          return 11 
     }
     else if ( rand2 > 10) {
          return 10
     } 
     else {
          return rand2
     }
}

function rendergame(){
     for ( i= 0; i < CardsNo.length; i ++){
          CardsEl.textContent += CardsNo[i] 
     }

     for ( i = 0; i < CardsNo.length; i += 2){
          sum += CardsNo[i]
          sumEl.textContent = "Sum: " + sum
     }

     if (sum <= 20) {
          messageEl.textContent = "do you want to draw a new card?"
     }

     else if ( sum === 21) {
          messageEl.textContent = "You've got blackjack!"
          HasBlackJack = true
     }

     else {
          messageEl.textContent = "You lose!"
          IsAlive = false
     }
}

function startgame(){
     let firstCard = randomNumber1()
     let secondCard = randomNumber2()

     CardsNo.push(firstCard, " and ")
     CardsNo.push(secondCard)

     document.getElementById("Newcard-El").addEventListener("click", function()
     {
     if (sum >= 21){
          this.disabled = true;} 
     else { 
               return true
          }
     })

     IsAlive = true
     rendergame()
     console.log("Is Alive: " + IsAlive)
     console.log("Has Black Jack: " + HasBlackJack)
}

function newcard(){
     
     let rand = Math.floor(Math.random()*13)+1

     function randomNumber(){
     CardsEl.textContent = " "

     if( rand === 1) {
          return 11 
     }
     else if ( rand > 10) {
          return 10
     }
     else {
          return rand
     }
     }

     let card = randomNumber()
     CardsNo.push(" and ", card)
     let x = 0
     
     sum = sum + card;
     sumEl.textContent = "Sum: " + sum

     for ( i= 0; i < CardsNo.length; i ++){
          CardsEl.textContent += CardsNo[i] 
     }
     

     if ( sum <= 20) {
          messageEl.textContent = "Wanna draw another card?" 
          IsAlive = true
     } 

     else if (sum === 21){
          messageEl.textContent= "You've got blackjack!"
          HasBlackJack = true
     } 

     else {
          messageEl.textContent = "You lose!"
          IsAlive = false    
     }

     console.log("Is Alive: " + IsAlive)
     console.log("Has Black Jack: " + HasBlackJack)

     document.getElementById("Newcard-El").addEventListener("click", function()
     {
     if (sum >= 21){
          this.disabled = true;} 
     else { 
               return true
          }
     })

}


