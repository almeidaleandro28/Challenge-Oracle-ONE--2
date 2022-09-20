// 
const words = ["js", "java", "python"];
let secretWord = "";

const canvas = document.querySelector(".canvas");
const board = canvas.getContext("2d");

const btnStart = document.querySelector(".btn-start");
const btnAdd = document.querySelector(".btn-add");
// 
const header = document.querySelector(".header");
const btns = document.querySelector(".buttons");
// section game
const game  = document.querySelector(".game");
const btnNew = document.querySelector(".btn-new");
const btGiveUp = document.querySelector(".btn-giveUp");
// section word
const sectionWord = document.querySelector(".section-word");
const btnSave = document.querySelector(".btn-save");
// 

// ----- functions -----------------------

const findSecretWord = () => {
  const word = words[ Math.floor( Math.random() * words.length ) ];
  secretWord = word;
}




// ---- events buttons ------------------

btnStart.addEventListener( "click", function() {
 btns.style.display = "none";
 game.style.display = "block";
 game.classList.toggle("d-flex");
 findSecretWord();
 writeCanvas();
 writeLines();
});



// show section word
btnAdd.addEventListener( "click", function(){
  sectionWord.style.display = "flex";
  sectionWord.classList.toggle("d-flex")
  btns.style.display = "none";

});


// 
btnNew.addEventListener("click", function() {

});

btGiveUp.addEventListener("click", function(){
  // btns.style.display = "block";
  game.style.display = "none";
});

// 
btnSave.addEventListener("click", function(){
  game.style.display = "flex";
  sectionWord.style.display = "none";
});

