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

// Helper function to update display and state after calculation
function updateCalculatorState(result) {
    a = result;
    if (c === null) {
        c = result;
    }
    if (result === 0 && c !== null) {
        Display.textContent = c;
    } else {
        Display.textContent = result;
    }
}

// Helper function to perform square root operation
function performSquareRoot() {
    const result = Math.sqrt(a);
    updateCalculatorState(result);
    return result;
}

// Helper function to perform exponentiation
function performExponentiation() {
    const result = a ** b;
    updateCalculatorState(result);
    return result;
}

// Helper function to perform multiplication
function performMultiplication() {
    const result = a * b;
    updateCalculatorState(result);
    return result;
}

// Helper function to perform addition
function performAddition() {
    const result = a + b;
    updateCalculatorState(result);
    return result;
}

// Helper function to perform subtraction
function performSubtraction() {
    if (c === null) {
        const result = a - b;
        c = result;
        Display.textContent = result;
        return result;
    }
    if (c !== null) {
        Display.textContent = c;
    }
    return c;
}

// Helper function to perform division with error handling
function performDivision() {
    const result = a / b;
    
    if (c === null) {
        c = result;
    }
    
    if (result === Infinity && b === 0) {
        Display.textContent = c;
    } else if (result === Infinity && c === Infinity) {
        Display.textContent = "Error: Did you just divide by zero!?? UH-OH!!You've Just Created a black Hole";
    } else {
        Display.textContent = result;
    }
    
    return result;
}

// Main calculation function - now much cleaner and more readable
function EqualTo() {
    b = NumStringArraytoNum();
    BracCheck();
    Answer = null;
    
    if (a !== null && b !== null && Operation !== "") {
        switch(Operation) {
            case "Sqrt":
                Answer = performSquareRoot();
                break;
            case "**":
                Answer = performExponentiation();
                break;
            case "*":
                Answer = performMultiplication();
                break;
            case "+":
                Answer = performAddition();
                break;
            case "-":
                Answer = performSubtraction();
                break;
            case "/":
                Answer = performDivision();
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

// Helper function to calculate simple interest future value
function calculateSimpleInterest(principal, rate, time) {
    return principal * (1 + rate * time);
}

// Helper function to calculate compound interest future value
function calculateCompoundInterest(principal, rate, compoundings, time) {
    return principal * (1 + (rate / compoundings)) ** (compoundings * time);
}

// Helper function to validate financial calculation inputs
function validateFinancialInputs(pv, rate, time, compoundings = null) {
    if (pv <= 0 || rate < 0 || time <= 0) {
        return false;
    }
    if (compoundings !== null && compoundings <= 0) {
        return false;
    }
    return true;
}

// Future Value calculation function - refactored for clarity
function FV() {
    /* TODO: Implement step-by-step input collection for financial calculations
    
    // Step-by-step input collection approach:
    // 1. Collect interest type (simple vs compound)
    // 2. Collect present value
    // 3. Collect interest rate
    // 4. Collect time period
    // 5. If compound, collect compounding frequency
    // 6. Calculate and display result
    
    if (validateFinancialInputs(PresentValue, InterestRate, Time, NumberofCompundings)) {
        if (IsSimple) {
            FutureValue = calculateSimpleInterest(PresentValue, InterestRate, Time);
            Display.textContent = `Future Value (Simple): ${FutureValue.toFixed(2)}`;
        } else {
            FutureValue = calculateCompoundInterest(PresentValue, InterestRate, NumberofCompundings, Time);
            Display.textContent = `Future Value (Compound): ${FutureValue.toFixed(2)}`;
        }
    } else {
        DisplayError.textContent = "Error: Invalid input values for financial calculation";
    }
    */
    
    DisplayError.textContent = "Button under construction";
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