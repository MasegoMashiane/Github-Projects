function toggleSlide() {
    document.getElementById("HiddenButtons").classList.toggle("slide-out");
}

const Display = document.getElementById("Display")
const DisplayError = document.getElementById("ErrorText")

let calc = []
let a = null
let b = null
let c = null
let Answer = 0

let CloseBracketTracker = 0
let OpenBracketTracker = 0
let Openbrac = false

let Operation = ""

function OpenBracket(){
    num("(")
    Openbrac = true
    OpenBracketTracker ++
    console.log(`OpBrackets: ${OpenBracketTracker}`)
}
function CloseBracket(){
    num(")")
    CloseBracketTracker ++    
    console.log(`CloseBrackets: ${CloseBracketTracker}`)
}

function BracCheck(){
    if( Openbrac === true){
        if (OpenBracketTracker > CloseBracketTracker){
            DisplayError.textContent = "Error: Closing Bracket Missing"
        }
        else if (OpenBracketTracker < CloseBracketTracker){
            DisplayError.textContent = "Error: Redundant Closing Bracket"
        }
    }
}

function EqualTo(){ 
    b = NumStringArraytoNum()
    BracCheck()
    Answer = null
    if (a !== null && b !== null && Operation !==""){
       switch(Operation){
            case "Sqrt":
                Answer = Math.sqrt(a)
                a = Answer
                if (c === null ){
                    c = Answer
                }
                if (Answer === 0 && c!== null){
                    Display.textContent = c
                }
            break;

            case "**":
                Answer = a**b
                a = Answer
                Display.textContent = Answer
                if (c === null ){
                    c = Answer
                }
                if (Answer === 0 && c!== null){
                    Display.textContent = c
                }
            break;
                                 
            case "*":
                Answer = a * b
                Display.textContent = Answer
                if (c === null ){
                    c = Answer
                }
                if (Answer === 0 && c!== null){
                    Display.textContent = c
                }
            break;

            case "+":
                Answer = a+b
                a = Answer
                Display.textContent = Answer
                if (c === null ){
                    c = Answer
                }
                if (Answer === 0 && c!== null){
                    Display.textContent = c
                }
            break;

            case "-":
                if (c === null ){
                    Answer = a-b
                    c = Answer
                    Display.textContent = Answer
                }
                if (c!== null){
                    Display.textContent = c
                }
            break;

            case "/":
                Answer = a/b
                Display.textContent = Answer
                if (c === null ){
                    c = Answer}
                if (Answer === Infinity && b === 0){
                    Display.textContent = c}
                if (Answer === Infinity && c === Infinity){
                    Display.textContent = "Error: Did you just divide by zero!?? UH-OH!!You've Just Created a black Hole"
                } 
            break;
        }
    }
}
//Assigning numbers to number buttons 
function num(n){
    calc.push(n)
    Display.textContent += n
}

let FutureValue = null
let PresentValue = null
let InterestRate = null
let NumberofCompundings = null
let Time = null
let IsSimple = true

function FV(){
    /*if(IsSimple){
    Display.textContent = "Press 1 if Simple Interest and 0 if Compound Interest: "
    IsSimple = num()}

    else if(InterestRate === null){
        Display.textContent = `interest rate: `
        InterestRate = Display.value
        Display.textContent = `interest rate: ${InterestRate}`
    }
    
    else if(PresentValue===null){
        Display.textContent = "Present Value: "
        PresentValue = Display.value
        Display.textContent = `Present Value: ${PresentValue}`
    }
    else if(NumberofCompundings===null){
        Display.textContent = `Number of Compoundings:`
        InterestRate = Display.value
        Display.textContent = `Number of Compoundings: ${InterestRate}`
    }
    else if(Time===null){
        Display.textContent = `Time:`
        InterestRate = Display.value
        Display.textContent = `Time: ${Time}`
    }
    
    else{
    if(IsSimple == 1){
        Display.textContent = "Simple Interest"
        FutureValue = PresentValue*(1+InterestRate*Time)
        Display.textContent = `Future Value Is: ${FutureValue}`
    }
    
    else{
        Display.textContent = "Compound Interest"
        FutureValue = PresentValue*(1+(InterestRate/NumberofCompundings))**(NumberofCompundings*Time)
        Display.textContent = `Future Value Is: ${FutureValue}`
    }}*/
   DisplayError.textContent = "Button under construction"
}
function i(){
    DisplayError.textContent = "Button under construction"
}
function time(){
    DisplayError.textContent = "Button under construction"
}
function PV(){
    DisplayError.textContent = "Button under construction"
}
function N(){
    DisplayError.textContent = "Button under construction"
}
function P(){
    DisplayError.textContent = "Button under construction"
}


//Assigning Functions to operation buttons 
function Operat(Op){
    a = NumStringArraytoNum()
    Operation = Op
    Display.textContent += ` ${Op} `
}

//Taking inputs from array and joining them such that you have a single string number
//Then type-converting the string to a number
//Clearing the array to accept the second number

function  NumStringArraytoNum(){   
    let str = ""
    str = calc.join("")
    number = Number(str)
    calc = []
    return number
}

function delet(){
    calc.pop()
    Display.textContent = Display.textContent.slice(0, -1)
}
function Okay(){

}
function Clear(){
FutureValue = null
PresentValue = null
InterestRate = null
NumberofCompundings = null
Time = null
IsSimple = true

    a = null
    b = null
    c = null
    Answer = null
    calc = []
    Display.textContent = ""
}