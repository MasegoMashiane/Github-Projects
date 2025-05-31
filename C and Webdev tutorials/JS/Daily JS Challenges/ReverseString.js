function reverseString() {
    const string = "Game" 
    let strRev = ""
    for (i = string.length - 1 ; i >= 0; i-- ){
        strRev += string[i]
    }
    return strRev
}
x = reverseString()
console.log(x)