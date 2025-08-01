function toggleSlide(){
    document.getElementById("HiddenButtons").classList.toggle("slide-out");
}

function toggleSlideDown1(){
    document.getElementsByClassName("Formulars")[0].classList.toggle("active1");
}
function toggleSlideDown2(){
    document.getElementById("Form").classList.toggle("active2");
}
function toggleSlideDown(){
    toggleSlideDown1()
    toggleSlideDown2()
}


const display = document.getElementById("Display")
const displayError = document.getElementById("ErrorText")

let calc = []
let a = null
let b = null
let c = null
let answer = 0

let closeBracketTracker = 0
let openBracketTracker = 0
let openbrac = false

let operation = ""

function openBracket(){
    num("(")
    openbrac = true
    openBracketTracker ++
    console.log(`OpBrackets: ${openBracketTracker}`)
}
function closeBracket(){
    num(")")
    closeBracketTracker ++    
    console.log(`CloseBrackets: ${closeBracketTracker}`)
}

function bracCheck(){
    if( openbrac === true){
        if (openBracketTracker > closeBracketTracker){
            displayError.textContent = "Error: Closing Bracket Missing"
        }
        else if (openBracketTracker < closeBracketTracker){
            displayError.textContent = "Error: Redundant Closing Bracket"
        }
    }
}

function equalTo(){ 
    b = numStringArraytoNum()
    bracCheck()
    answer = null
    if (a !== null && b !== null && operation !==""){
       switch(operation){
            case "Sqrt":
                answer = Math.sqrt(a)
                a = answer
                if (c === null ){
                    c = answer
                }
                if (answer === 0 && c!== null){
                    display.textContent = c
                }
            break;

            case "**":
                answer = a**b
                a = answer
                display.textContent = answer
                if (c === null ){
                    c = answer
                }
                if (answer === 0 && c!== null){
                    display.textContent = c
                }
            break;
                                 
            case "*":
                answer = a * b
                display.textContent = answer
                if (c === null ){
                    c = answer
                }
                if (answer === 0 && c!== null){
                    display.textContent = c
                }
            break;

            case "+":
                answer = a+b
                a = answer
                display.textContent = answer
                if (c === null ){
                    c = answer
                }
                if (answer === 0 && c!== null){
                    display.textContent = c
                }
            break;

            case "-":
                if (c === null ){
                    answer = a-b
                    c = answer
                    display.textContent = answer
                }
                if (c!== null){
                    display.textContent = c
                }
            break;

            case "/":
                answer = a/b
                display.textContent = answer
                if (c === null ){
                    c = answer}
                if (answer === Infinity && b === 0){
                    display.textContent = c}
                if (answer === Infinity && c === Infinity){
                    display.textContent = "Error: Did you just divide by zero!?? UH-OH!!You've Just Created a black Hole"
                } 
            break;
        }
    }
}
//Assigning numbers to number buttons 
function num(n){
    calc.push(n)
    display.textContent += n
}

let futureValue = null
let presentValue = null
let interestRate = null
let numberofCompundings = null
let tim = null
let isSimple = true

function fV(){
    /*if(isSimple){
    display.textContent = "Press 1 if Simple Interest and 0 if Compound Interest: "
    isSimple = num()}

    else if(interestRate === null){
        display.textContent = `interest rate: `
        interestRate = display.value
        display.textContent = `interest rate: ${interestRate}`
    }
    if (compoundings !== null && compoundings <= 0) {
        return false;
    }
    return true;
}

// Future Value calculation function - refactored for clarity
function FV() {
    /* TODO: Implement step-by-step input collection for financial calculations
    
    else if(presentValue===null){
        display.textContent = "Present Value: "
        presentValue = display.value
        display.textContent = `Present Value: ${presentValue}`
    }
    else if(numberofCompundings===null){
        display.textContent = `Number of Compoundings:`
        numberofCompundings = display.value
        display.textContent = `Number of Compoundings: ${numberofCompundings}`
    }
    else if(tim===null){
        display.textContent = `Time:`
        tim = display.value
        display.textContent = `Time: ${tim}`
    }
    
    else{
    if(isSimple == 1){
        display.textContent = "Simple Interest"
        FutureValue = presentValue*(1+interestRate*tim)
        display.textContent = `Future Value Is: ${FutureValue}`
    }
    
    
    else{
        display.textContent = "Compound Interest"
        futureValue = presentValue*(1+(interestRate/numberofCompundings))**(numberofCompundings*tim)
        display.textContent = `Future Value Is: ${FutureValue}`
    }}
   displayError.textContent = "Button under construction"
}
function i(){
    displayError.textContent = "Button under construction"
}
function time(){
    displayError.textContent = "Button under construction"
}
function pV(){
    displayError.textContent = "Button under construction"
}
function n(){
    displayError.textContent = "Button under construction"
}
function p(){
    displayError.textContent = "Button under construction"
}*/
}

//Assigning Functions to operation buttons 
function operat(op){
    a = numStringArraytoNum()
    operation = op
    display.textContent += ` ${op} `
}

//Taking inputs from array and joining them such that you have a single string number
//Then type-converting the string to a number
//Clearing the array to accept the second number

function  numStringArraytoNum(){   
    let str = ""
    str = calc.join("")
    number = Number(str)
    calc = []
    return number
}

function delet(){
    calc.pop()
    display.textContent = display.textContent.slice(0, -1)
}
function okay(){

}

function clear(){
futureValue = null
presentValue = null
interestRate = null
numberofCompundings = null
tim = null
isSimple = true

    a = null
    b = null
    c = null
    answer = null
    calc = []
    display.textContent = ""
}