
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

function draw (){
ctx.clearRect(0, 0, canvas.width, canvas.height)
ctx.fillStyle = 'blue';
ctx.fillRect(50, 50, 100, 100); //fillRect(x,y, width, height)
}

/*ctx.strokeStyle = 'red'; //outline
ctx.strokeRect(200, 50, 100, 100);
ctx.clearRect(80, 65, 40, 70) //clears a small square in the blue box

ctx.beginPath();

ctx.arc(135, 165, 100, 0, Math.PI*2) //arc(x, y, radius, Arc Length )
ctx.stroke();*/

let x = 50 
let y = 50 
let speedX = 2
let speedY = 2

function update(){
    x+= speedX
    y+= speedY

    if (x > canvas.width || x < 0)
    {
        speedX--
    }
    if (y > canvas.height || y < 0)
    {
        speedY--
    }
}

function gameloop(){
    update();
    draw()
    requestAnimationFrame(gameloop)
}

gameloop()