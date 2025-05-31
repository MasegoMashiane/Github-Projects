//identify longest word in sentence
//Sentence => All dogs go to heaven
//Sent => Sentence(string)you want to evaluate
let H1El = document.getElementById("Answer")
H1El.textContent = "All dogs go to heaven"

function longWordIdentify(Sent){
//const Sent = "All dogs go to heaven"
//Everytime a space is encoumtered slice
let word = ""
let Words = []
    for (i = 0, i <= sent.length, i++){
        word = Sent[i].slice(i, Sent.indexof(" "))
        //Save what was sliced into an array
        Words.push(word)
        word = ""
    }
//for each word in an array, check length
    let currentWord = Words[0]
    for (i=0, i <= Words.length, i++){
        
        if
        (currentWord.length === Words[i].length){
        currentWord = currentWord
        }
    
        else if
        (currentWord.length > Words[i].length){
        currentWord = currentWord
        }
    
        else {
        currentWord = Word[i]
        }
    return currentWord
}
    

/*
run a for loop where
 * the previous word length is compared
 * against the next one, each time saving
 * the word woth highest length
 * number to a variable
 * until all the words have been 
 * iterated over
*/