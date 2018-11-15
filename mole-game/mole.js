const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");
let lastHole;
let timeUp = false;
let score = 0;

function randTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
function randHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if (hole === lastHole) {
    console.log("last");
    return randHole(holes);
  }
  console.log(hole);

  lastHole = hole;
  return hole;
}

function pop() {
  const time = randTime(200, 1000);
  const hole = randHole(holes);
  console.log(time, hole);
  hole.classList.add("up");

  setTimeout(() => {
    hole.classList.remove("up");
    if (!timeUp) pop();
  }, time);
}

function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  pop();

  setTimeout(() => (timeUp = true), 10000);
}

function hit(e) {
  if (!e.isTrusted) return; //cheater
  score++;
  this.classList.remove("up");
  scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener("click", hit));
