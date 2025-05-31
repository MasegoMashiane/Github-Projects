/* Data structures that store multiple values of  the same type 
in a contiguous block of memory. 
They allow for efficient indexing  and retrieval of elements.
They have a fixed size.
Ordered list.
Zero Indexed 
primitive data types => Strings, boleans, and numbers 
composite data type/complex data type

Array.split() => Separating a string into chunks at a specified point of separation
Array.splice() => deleting a specific value at a specified index
*/

let featuredPosts = [
    'Netflix Clone'
    ,'Project Code',
    ' Portfolio launch']

let skills = [
    'Python', 'Web Development',
    'Mathematics', 'Philosophy'
]

// Array Operations

let cards = [7, 4]

cards.push(6) // Adding values in the array {method: Function on an object}

let messages = [
    "hey, how is it going?", 
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately"
]

let NewMessage = "Same here"

messages.push(NewMessage)
console.log(messages)

messages.pop()
console.log(messages)