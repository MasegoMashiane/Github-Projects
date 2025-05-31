// turn myleads string into an array
// push a new value into the array
// turn array into string again
//console.log the string using typeof

let X = "www.Peanut.com"

let myleads = `["www.awesome.com"]`
myleads = JSON.parse(myleads)
console.log(myleads)
myleads.push(X)
myleads = JSON.stringify(myleads)
console.log(myleads)
// stringify my leads fisrt before saving to  localStorage
localStorage.setItem("myleads", myleads)
console.log(JSON.parse(localStorage.getItem("myleads")))