//Problem: Create an array with 5 student names
//After that create a function that takes two parameters
//Iterate over all students and find a specific StudentName

let allstudents = ['Paul', 'Parker', 'Palesa', 'Pat', 'Prudence']

function upperCase(element, index, allstudents){ 
    allstudents[index] = element.toUpperCase()
   
}

allstudents.forEach(upperCase)

let FindStudentName = (allstudents, studentname) => {
    
    studentname = studentname.toUpperCase()


    if (studentname === ""){
        return `Error: you did not type in name`
    }

    for (let i = 0; i < allstudents.length; i++){

        if (allstudents[i] === studentname ){
            return `${studentname} found at index ${i}`
        }
        console.log(studentname)
        console.log(allstudents[i])
        console.log(allstudents)
        console.log(i)
    }

    return "Name not found"
}
console.log(FindStudentName(allstudents, "riley"))

//linear search algorithm