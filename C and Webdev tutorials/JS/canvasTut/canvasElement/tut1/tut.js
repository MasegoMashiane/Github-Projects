const canvas = document.querySelector('canvas')
console.log(canvas)
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d')

 
let r;
let g;
let b;

for(let i = 0; i<10 ; i++){
    r = Math.floor(Math.random()*256)
    g = Math.floor(Math.random()*256)
    b = Math.floor(Math.random()*256)

    ctx.beginPath();
    ctx.arc(Math.random()*canvas.width, Math.random()*canvas.height, 10, 0, Math.PI*2, false);
    ctx.strokeStyle = `rgb(${r}, ${g}, ${b})`
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(Math.random()*canvas.width, Math.random()*canvas.height);
    ctx.lineTo(Math.random()*canvas.width, Math.random()*canvas.height);
    ctx.strokeStyle = `rgb(${r}, ${g}, ${b})`;
    ctx.stroke();

    ctx.beginPath()
    ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
    ctx.fillRect(Math.random()*canvas.width, Math.random()*canvas.height, 30, 30)
    ctx.stroke();
}