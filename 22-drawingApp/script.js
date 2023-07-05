const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d");
const increase = document.getElementById("increase")
const decrease = document.getElementById("decrease")
let sizeText = document.getElementById("size")
let size = + (document.getElementById("size").innerText)
let color = document.getElementById("color");
let clear = document.getElementById("clear");


let isPressed = false
let x;
let y;

canvas.addEventListener("mousedown", (e) => {
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
})
canvas.addEventListener("mouseup", (e) => {
    isPressed = false;
    x = undefined;
    y = undefined;
})
canvas.addEventListener("mousemove", (e) => {
    if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;
        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)
        x = x2;
        y = y2;
    }
})

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color.value;
    ctx.fill();
}
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color.value;
    ctx.lineWidth = size * 2;
    ctx.stroke();

}

increase.addEventListener("click", () => {
    add()
})
decrease.addEventListener("click", () => {
    minus()
})

function add() {
    if (size === 12) {
        size = 12
    } else {

        size++;
        sizeText.innerText = size;
    }

}
function minus() {
    if (size == 1) {
        size = 1
    } else {

        size--;
        sizeText.innerText = size;
    }

}

clear.addEventListener("click", () => {
    clearCanvas(canvas);
})
function clearCanvas(canvas) {
    const ctx = canvas.getContext('2d');
    ctx.save();
    ctx.globalCompositeOperation = 'copy';
    ctx.strokeStyle = 'transparent';
    ctx.beginPath();
    ctx.lineTo(0, 0);
    ctx.stroke();
    ctx.restore();
}

