let counter  = document.getElementById("counter")

let count = 0
function increment(){
    count += 1 
    counter.textContent = count
}

function ResetE(){
    count = 0
    counter.textContent = count
}

let saved = document.getElementById("saved")
function Save(){
    let sv = count + " - "
    saved.textContent += sv
    count = 0
    counter.textContent = count
}

function Reset(){
    count = " "
    saved.textContent = count
}