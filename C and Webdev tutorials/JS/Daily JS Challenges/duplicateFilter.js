let array = [2,2,3,4,4,4,4,5,6,6]
const lenOfOrigArray = array.length
let array2 = []
let array3 = []

let counter = 0
//find all the duplicates in the array and then remove them

function removeDuplicate(){
//For loop which will repeat n number of times
//n being equivalent to the length of the array
    
    console.log(lenOfOrigArray)

    if (counter <= lenOfOrigArray){
    console.log(`array3: ${array3}`)
    } 

    
    array2 = []
    console.log(`array2 must be empty: ${array2} 
                State of array: ${array}    
                round:${counter}`)


    checkForDuplicates()
    
}


function checkForDuplicates(){
    counter++
    array2.push(array.shift())

    console.log(`Array2 must have someting: ${array2} 
                 State of array: ${array}                 
                round:${counter}`)


    for(let i = 0; i < array.length; i++){
        
        if (array[i] === array2[0]){
            array3.push(array2[0])
            removeDuplicate()
        }

        if (array2[0] != array[i] ){
            checkForDuplicates()
        }
    }
}


checkForDuplicates()