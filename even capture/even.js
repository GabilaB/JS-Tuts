const divs = document.querySelectorAll("div");
const button = document.querySelector("button");

function logText(e) {
  console.log(this.classList.value);
  //   e.stopPropagation(); //stop bubbling. don't click thru
}

divs.forEach(div =>
  div.addEventListener("click", logText, {
    capture: false,
    once: false
  })
);

button.addEventListener(
  "click",
  () => {
    console.log("click");
  },
  {
    once: true // For someone to only click this ONCE!
  }
);
