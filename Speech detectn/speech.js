window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement("p");
const word = document.querySelector(".words");
words.appendChild(p);

recognition.addEventListener("results", e => {
  console.log(e.results);

  const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join("");

  p.textContent = transcript;
  if (e.result[0].isFinal) {
    p = document.createElement("p");
    words.appendChild(p);
  }

  if (transcript.includes("get the weather")) {
    console.log("At your service weather man"); // could be very handy in hands off applications
  }

  console.log(transcript);
});

recognition.addEventListener("end", recognition.start);
