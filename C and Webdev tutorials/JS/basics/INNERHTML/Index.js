const BtnEl = document.getElementById("btn")
BtnEl.innerHTML = "<button onclick = 'buy()'>BUY!</button>"

function buy(){
    BtnEl.innerHTML += "<p>Thank you for buying!</p>"
}

