let array = [2,2,3,4,4,4,4,5,6,6]
let Array2 = []
let p = 0

function removeDuplicate(){
//For loop which will repeat n number of times
//n being equivalent to the length of the array
    Array2.push(array.shift())
    check()
    return array
}


function check(){
    
    for(let i = 0; array.length; i++){

        if (array[i] === Array2[0]){
            array.splice(array[i], 1)
            Array2 = []

            console.log(`
            Array: ${array}
            Array2: ${Array2}`)
        }
        else{
        return array
        }
    }
}

let x = removeDuplicate()
console.log(x)