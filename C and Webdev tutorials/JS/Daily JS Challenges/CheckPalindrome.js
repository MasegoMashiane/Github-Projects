const wordOrPhrase = "prize"
//Update[DELETE SPACES and special characters, RE-ASSIGN NEW STRING, CHECK IF PALINDROME]=>This update must also checks phrases
let WordLowerCase = wordOrPhrase.toLowerCase()
function checkIfPalindrome(){
    let ReversedWord = ""
    let IsPalindrome = ""
    const len = WordLowerCase.length - 1
    for (let i = len; i >=0; i--){
       ReversedWord += WordLowerCase[i]
    }
    if (ReversedWord === WordLowerCase){
        IsPalindrome = " Is a Palindrome"
    }
    else{
        IsPalindrome = "Is not a Palindrome"
    }
    return WordLowerCase +" => "+ ReversedWord + ": "+ IsPalindrome
}
const PalindromeCheck = checkIfPalindrome()
console.log(PalindromeCheck)