//Problem: Create an array with 5 student names
//After that create a function that takes two parameters
//Iterate over all students and find a specific StudentName

let allstudents = ['Paul', 'Parker', 'Palesa', 'Pat', 'Prudence']

function FindStudentName(allstudents, studentname){
 for (let i = 0; i < allstudents.length; i++){
    if (allstudents[i] === studentname ){
        return allstudents[i]
    }
    else{
        return "Name not found"
    }
 }
}

console.log(FindStudentName(allstudents, "Paul"))

//linear search algorithm