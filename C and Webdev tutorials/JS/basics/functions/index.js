/*const NumList = [1, 2, 3]
const i = 13

function getFirst(NumList, i){
    if (i > NumList.length-1){
        if ( i - a.length >= 10){
            return 'bruh! Check the length of your dataset'
        }
        else{
        return 'Out of bounds'}
    }
    return a[i]
}
const X = getFirst(NumList, i)
console.log(X)*/

/*let Even = function IsEven (NumList){
    let EvenCheck = NumList%2
    if (EvenCheck === 0){
        return true
    }
    else{
        return false
    }    
}
console.log(Even(2))

let Even = function IsEven(number){
 let EvenCheck = number%2 === 0 ? true : false
 return EvenCheck
}

let Even = (number) => number%2 === 0? true:false;

console.log (Even(22))

function isValidEmail(email){
    return email.includes("@") ? true : false
}

console.log(isValidEmail ("mashianegmail.com"))*/


//Random Password Generator 

/*const length = 20
const includeLowerCase = true
const includeUpperCase = true
const includeNumbers = true
const includeSymbols = true

let RandomPassword = (length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols)=>{
    const lowercase = "abcdefghijklmnopqrstuvwxyz"
    const UpperCase = "ABCDEFGHIJKLMNOPGRSTUVWXYZ"
    const numbers = "0123456789"
    const Symbols = "~!@#$%^&*()_+[]{};':,.<>/?*\|=-"

    let allowedchars = ""
    let password = ""

    allowedchars += includeLowerCase? lowercase : "";
    allowedchars += includeUpperCase? UpperCase : "";
    allowedchars += includeSymbols? Symbols : "";
    allowedchars += includeNumbers? numbers : "";
    console.log(allowedchars)

    if (length <= 0){
        return `Length must at least be 1`
    }
    if (allowedchars.length === 0){
        return `At least one set of characters must be selected`
    }

    for (let i = 0; i < length; i++){
        let randindex = Math.floor(Math.random()*allowedchars.length)
        password += allowedchars[randindex] 
    }
    return password; 
}
console.log(`Password: ${RandomPassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols)}`)*/

//fizzbuzz Array
/*Rndnumber = 60
let Array = []
let fizzBuzzGen = (Rndnumber) =>{
    for (let i = 1; i <= Rndnumber; i++){
        let number = i  
        
        if (i%3 === 0 && i%5 === 0){
            number = "FizzBuzz"
        }

        if (number%3 === 0){
            number = "fizz"
        }
        
        if (number%5 === 0 ){
            number = "Buzz"
        }
        Array.push(number)
        console.log(number)
    }
    return Array
}
console.log(fizzBuzzGen(Rndnumber))*/

//Anagram Detector

//const string1 = "Lehlohonolo" 
//const string2 = "Dolphin"
/*
let AnagramDetect = (string1, string2) => {
    let IsAnagram;
    
    let str1;
    let str2;
    str1 = string1.toUpperCase()
    str2 = string2.toUpperCase()
    
    let Arr1;
    let Arr2;
    Arr1 = str1.split("")
    Arr2 = str2.split("")

    //Check length of the words
    //If the lengths do not match,then it isn't an anagram
    //But if they do, it could be but it also couldn't be 
    if (Arr1.length !== Arr2.length){
        IsAnagram = "not anagrams"
    }

    else{
        let PopLetter;
        let compare;

        while(Arr2.length !== 0 && Arr1.length !== 0 ){
            //Pop a letter from the array of the first word
            //The, use it to check if can be located in teh array of the second
            PopLetter = Arr1.pop()
            compare = Arr2.indexOf(PopLetter)
            
            //Check if the letter has been located
            //If it wasn't then the words aren't anagrams
            //if it is then they could/couldn't be
            if (compare >= 0 ){
                let Letterpopped;
                Letterpopped = Arr2.splice(Arr2.indexOf(PopLetter), 1)
            }

            if (compare === -1){
                IsAnagram = "not anagrams"
            }
            
            //If the letter has been locate, then remove the letter from second array
            //The sizes of of Arr1 and Arr2 should now be equal
            PopLetter = ""
            compare = 0
        }

        if(Arr2.length === 0 && Arr2.length === 0){
            IsAnagram = "anagrams"
        }

        if(Arr2.length !== Arr2.length){
            IsAnagram = "not anagrams"
        }
    }
    return `${str1} and ${str2} are ${IsAnagram}`
}

console.log(AnagramDetect("Honeybun", "Lehlohonolo"))*/


//Callback Functions 
//Callback is a function passed as an argument to another function 
/*
Used to handle asynchronous operations:
1. Reading a file
2. Network requests
3. Interacting with databases


It ensures that the callback executes after the function with the callback has been called


function hello(callback){
    console.log("Hello")
    callback()
}
function goodbye(){
    console.log("Goodbye")
}

hello(goodbye)*/

//forEach() = method use to iterate over the elements of an array and apply a specified
//            function(callback) to each element
/*
array.forEach(callback)
element, index, array are provided as arguments
*/