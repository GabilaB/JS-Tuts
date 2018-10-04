// const TypeWriter = function(txtElement, words, wait = 3000) {
//   this.txtElement = txtElement;
//   this.words = words;
//   this.txt = "";
//   this.wordIndex = 0;
//   this.wait = parseInt(wait, 10);
//   this.type();
//   this.isDeleting = false;
// };

// //Type Method
// TypeWriter.prototype.type = function() {
//   // current index of words
//   const current = this.wordIndex % this.words.length;

//   // Get the full text of the CURRENT word
//   const fulltxt = this.words[current];

//   // check if deleting

//   if (this.isDeleting) {
//     //Remove a charac
//     this.txt = fulltxt.substring(0, this.txt.length - 1);
//   } else {
//     //add a charac
//     this.txt = fulltxt.substring(0, this.txt.length + 1);
//   }

//   // Insert txt into element
//   this.txtElement.innerHTML = `<span class = "txt">${this.txt}</span>`;

//   // Initial Type Speed
//   let typeSpeed = 300;

//   if (this.isDeleting) {
//     typeSpeed /= 2;
//   }

//   //Check if word is complete
//   if (!this.isDeleting && this.txt === fulltxt) {
//     typeSpeed = this.wait; // this will make pause at end
//     //set delete to true

//     this.isDeleting = true;
//   } else if (this.isDeleting && this.txt === "") {
//     // after deleting, pause and add next word
//     this.isDeleting = false;

//     //move to next word

//     this.wordIndex++;
//     //pause before start typing
//     typeSpeed = 500;
//   }

//   setTimeout(() => this.type(), typeSpeed);
// };

//ES6 class
class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // current index of words
    const current = this.wordIndex % this.words.length;

    // Get the full text of the CURRENT word
    const fulltxt = this.words[current];

    // check if deleting

    if (this.isDeleting) {
      //Remove a charac
      this.txt = fulltxt.substring(0, this.txt.length - 1);
    } else {
      //add a charac
      this.txt = fulltxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class = "txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 300;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    //Check if word is complete
    if (!this.isDeleting && this.txt === fulltxt) {
      typeSpeed = this.wait; // this will make pause at end
      //set delete to true

      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      // after deleting, pause and add next word
      this.isDeleting = false;

      //move to next word

      this.wordIndex++;
      //pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

//Init On DOM Load
document.addEventListener("DOMContentLoaded", init);

//init App
function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");

  //Init TypeWriter

  new TypeWriter(txtElement, words, wait);
}
