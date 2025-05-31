//String slicing =  creating a substring
//                  from a portion of the original string 
//                  str.slice(start, end)

const fullname = "Masego Mashiane"
let firstname = fullname.slice(0, fullname.indexOf(" ")) //fullname.slice(7, fullname.length)
let lastname = fullname.slice(fullname.indexOf(" ")+1)
console.log(firstname)
console.log(lastname)

const email = "Mashianemlb@gmail.com"
let username = email.slice(0, email.indexOf("@"))
console.log(username)
let extension = email.slice(email.indexOf("@")+1)
console.log(extension)
console.log(firstname.charAt(0))