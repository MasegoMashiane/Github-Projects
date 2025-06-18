let array = ["a","a","b","a"]
const lenOfOrigArray = array.length
let array2 = []
let array3 = []
let counter = 0
//find all the duplicates in the array and then remove them



function repeat(){
//For loop which will repeat n number of times
//n being equivalent to the length of the array
    
    console.log(lenOfOrigArray)

    if (counter <= lenOfOrigArray){
        console.log(`array: ${array3}`)
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

    if (counter === 1){
        array3[0] = array2[0]
    }
    console.log(`Array2 must have someting: ${array2} 
                 State of array: ${array}                 
                round:${counter}`)


    for(let i = 0; i < array.length; i++){
        
        if (array[i] === array2[0]){
            console.log('if enclosure')
            repeat()
        }

        else if(array2[0] != array[i] ){
            console.log('else if enclosure')
            array3.push(array[i])
            repeat()
        }
    }
}


checkForDuplicates()