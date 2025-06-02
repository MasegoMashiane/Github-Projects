let array = [2,2,3,4,4,5]
let Array2 = []
let counter = array.length
function removeDuplicate(){
//For loop which will repeat n number of times
//n being equivalent to the length of the array

    for(let i=0; array.length; i++){
        Array2.push(array.shift())

    counter --
    
        if (array[i] === Array2){
            array[i].pop
            Array2 = []
            repeat()
        }

        else{
            return counter
        }
    }
}


function repeat(){
    //check if array is empty first before repeating the remove... function
    if (counter > 0){
        removeDuplicate()
    }

    else{
        return array
    }
}


let x = removeDuplicate()
console.log(x)