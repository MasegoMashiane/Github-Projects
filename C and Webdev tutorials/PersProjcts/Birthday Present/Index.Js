const petal = document.getElementsByClassName('flower__fall-down--yellow')
let ClickedCounter = 0

function pop(){
    ClickedCounter += 1
    if (ClickedCounter > 1){
        return
    }
    else{
    petal[0].classList.toggle('popping');
    setTimeout(() => {
        petal[0].classList.remove('flower-fall-down-yellow', 'popping');
        petal[0].classList.toggle('butterfly');
    }, 300);}
}