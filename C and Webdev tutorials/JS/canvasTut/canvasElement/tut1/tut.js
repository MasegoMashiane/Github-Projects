const canvas = document.querySelector('canvas')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d')

let r = 10;
let x = r;
let dx = 0.5;
let y = 5;
let dy = 0.5;
function animate() {
    requestAnimationFrame(animate);
    //ctx.clearRect(0, 0, canvas.width, canvas.height)
    //ctx.clearRect(0,0, canvas.width, canvas.height)
    ctx.beginPath();
    ctx.arc(x, Math.random()*canvas.height, r, 0, Math.PI*2, false);
    ctx.strokeStyle = 'blue';
    ctx.stroke();
    x += dx;
}

animate()
/*let r;
let g;
let b;

let rad= 20

let x = Math.random()*canvas.width
let y = Math.random()*canvas.height

let dx = (Math.random()-0.5)*35
let dy = (Math.random()-0.5)*35

    ctx.beginPath()
    ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
    ctx.fillRect(Math.random()*canvas.width, Math.random()*canvas.height, 30, 30)
    ctx.stroke();
}*/
function animate(){


ctx.clearRect(0, 0, canvas.width, canvas.height)
requestAnimationFrame(animate)

ctx.beginPath();
ctx.arc(x, y, rad, 0, Math.PI*2, false);
ctx.strokeStyle = `rgb(${r}, ${g}, ${b})`
ctx.stroke();

x+=dx
y+=dy

if (x + rad > canvas.width|| x + rad < 2*rad){
    dx  = -dx
}
if (y + rad > canvas.height || y + rad < 2*rad){
    dy  = -dy

}
}
// animate()
// for(let i = 0; i<10 ; i++){
//     r = Math.floor(Math.random()*256)
//     g = Math.floor(Math.random()*256)
//     b = Math.floor(Math.random()*256)

//     ctx.beginPath();
//     ctx.arc(Math.random()*canvas.width, Math.random()*canvas.height, 10, 0, Math.PI*2, false);
//     ctx.strokeStyle = `rgb(${r}, ${g}, ${b})`
//     ctx.stroke();

//     ctx.beginPath();
//     ctx.moveTo(Math.random()*canvas.width, Math.random()*canvas.height);
//     ctx.lineTo(Math.random()*canvas.width, Math.random()*canvas.height);
//     ctx.strokeStyle = `rgb(${r}, ${g}, ${b})`;
//     ctx.stroke();

//     ctx.beginPath()
//     ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
//     ctx.fillRect(Math.random()*canvas.width, Math.random()*canvas.height, 30, 30)
//     ctx.stroke();
// }
