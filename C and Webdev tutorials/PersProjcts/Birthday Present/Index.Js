let petal = document.getElementsByClassName('flower__fall-down--yellow')
function pop(){
    petal[0].classList.toggle('popping');

    setTimeout(() => {
        petal[0].classList.remove('flower-fall-down-yellow', 'popping');
        petal[0].classList.toggle('butterfly');
    }, 300);
}

