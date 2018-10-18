const dogs = [{ name: "Snickers", age: 2 }, { name: "hugo", age: 8 }];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular
console.log("hello");

// Interpolated
console.log("hello I am a %s string!", "+poop");
// Styled
console.log("%c hello I am a %s string!", "font-size: 30px;");
// warning!
console.warn("YIKES");
// Error :|
console.error("YIKES");
// Info
console.info("Fix me");
// Testing
console.assert();
// clearing

// Viewing DOM Elements

// Grouping together

// counting
// timing
