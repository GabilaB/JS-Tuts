const pressed = [];
const code = "gabis";

window.addEventListener("keyup", e => {
  console.log(e.key);
  pressed.push(e.key);
  pressed.splice(-code.length - 1, pressed.length - code.length);

  if (pressed.join("").includes(code)) {
    console.log("you did it!");
    cornify_add();
  }
  console.log(pressed);
});
