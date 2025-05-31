//Objects - store data in-depth (composite/complex data types)
// key-value pairs

let course = { 
    title: "learn CSS Grid for free",
    lessons: 12,
    Creator: "Masego Mashiane",
    level: 2,
    length: 63,
    isFree: true,
    tags: ["html","CSS"]
}

let Castle = {
    title:"Live like a King",
    price: 400,
    location: "Bredford",
    roomsAvailable: true,
    images: [1, 2, 3]
}

let Person = {
    name: "Masego",
    age: 24,
    country: "South Africa"
}

function logData(){
    console.log(Person.name+" is "+Person.age+" years old and lives in "+Person.country)
}

/*let age = 18

if (age < 6){
    console.log("discount: free")
}
else if (age >= 6 && age <= 17){
    console.log("Discount: Child Discount")
}
else if(age > 17 && age <=26 ){
    console.log("Discount: Student Discount")
}
else if (age > 26 && age<= 66){
    console.log("Discount: Full Price")
}
else{
    console.log("Discount: Senior Citizen Discount")
}

let largeCountries = ["Tuvalu", "India", "USA", "Indonasia", "Monaco"]
largeCountries.pop()
largeCountries.shift()
largeCountries.unshift("China")
largeCountries.push("Pakistan")

console.log("The 5 largest countries in the world.")
for (i = 0; i < largeCountries.length; i++){
    console.log("- " + largeCountries[i])
}

let hands = ["rock", "paper","scissor"]

function randomhand(){
    let rand =  Math.floor(Math.random()*hands.length) +  1
    if (rand === 1){
        return hands[0]
    }
    else if (rand === 2){
        return hands[1]
    }
    else{
        return hands[2]
    }
}

let Throw = randomhand()
console.log(Throw)*/

let rand =  Math.floor(Math.random()*3)
let hands = ["rock", "paper","scissor"]
function getHand(){
    return hands[rand]
}
console.log(getHand())
