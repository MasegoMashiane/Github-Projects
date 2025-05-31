let Array = []
let Array2 = [Array[0]] 
function MaxPosNo(){
if (Array [0] < Array [1]){
    Array2.pop()
    Array2.push(Array[1])
    for (let i = 0; i <= Array.length; i++){
        if (Array2 < Array[i])
        {            
            Array2.push(Array[i])
        }
    }
}
return "Highest Number is: " + Array2[0] 
}
let x = MaxPosNo()
console.log(x)