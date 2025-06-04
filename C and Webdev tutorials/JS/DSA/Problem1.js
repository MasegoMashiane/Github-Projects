//Problem: Create an array with 5 student names
//After that create a function that takes two parameters
//Iterate over all students and find a specific StudentName

let allstudents = ['Paul', 'Parker', 'Palesa', 'Pat', 'Prudence']

function FindStudentName(allstudents, studentname){
Index = allstudents.indexOf(studentname) 

if (Index === -1)
{return false}
else{
    return true
}
}

console.log(FindStudentName(allstudents, `true`))