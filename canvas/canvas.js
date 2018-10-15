const canvas = document.querySelector("#draw");
const context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
context.strokeStyle = "black";
context.lineJoin = "round";
context.lineCap = "round";
context.lineWidth = 100;
context.globalCompositeOperation = "multiply";

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
  if (!isDrawing) return; // stops drawing when mouse not moved downward
  console.log(e);

  context.strokeStyle = `hsl(${hue}, 100%, 50%)`;

  context.beginPath();
  context.moveTo(lastX, lastY);
  context.lineTo(e.offsetx, e.offsetY);
  context.stroke();
  [lastX, lastY] = [e.offsetx, e.offsetY];
  hue++;

  if (hue >= 360) {
    hue = 0;
  }

  if (context.lineWidth >= 100 || context.lineWidth <= 1) {
    direction = !direction;
  }
  if (direction) {
    context.lineWidth++;
  } else {
    context.lineWidth--;
  }
}

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", e => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetx, e.offsetY];
});
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
