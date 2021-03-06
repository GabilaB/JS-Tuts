//console.log(event.keyCode);

function playsound(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  if (!audio) return; // Stops everything
  audio.currenTime = 0;
  audio.play();
  key.classList.add("playing");
}

function removeTransition(event) {
  if (event.propertyName !== "transform") return; //skip this if not transformed
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playsound);
