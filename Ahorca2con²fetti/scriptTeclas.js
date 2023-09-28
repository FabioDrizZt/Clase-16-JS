const words = [
  "neo",
  "morfeo",
  "trinity",
  "smith",
  "oraculo",
  "cypher",
  "tank",
];
let selectedWord = "";
let correctLetters = [];
let wrongLetters = [];
let attempts = 6;

const wordDisplay = document.getElementById("wordDisplay");
const attemptsDisplay = document.getElementById("attempts");

function displayWord() {
  wordDisplay.innerHTML = "";
  for (const letter of selectedWord) {
    if (correctLetters.includes(letter)) {
      wordDisplay.innerHTML += letter + " ";
    } else {
      wordDisplay.innerHTML += "_ ";
    }
  }
}

function checkLetter(letter) {
  if (selectedWord.includes(letter)) {
    if (!correctLetters.includes(letter)) {
      correctLetters.push(letter);
      displayWord();
      checkGameOver();
    }
  } else {
    if (!wrongLetters.includes(letter)) {
      wrongLetters.push(letter);
      attempts--;
      attemptsDisplay.textContent = attempts;
      checkGameOver();
    }
  }
}

function checkGameOver() {
  if (attempts === 0) {
    alert("¡Perdiste! La palabra era: " + selectedWord);
    newGame();
  } else if (!wordDisplay.innerHTML.includes("_")) {
    confettiLoco();
    setTimeout(() => {
      alert("Ganaste! La palabra era: " + selectedWord);
    }, 200);
    newGame();
  }
}

function newGame() {
  attempts = 6;
  attemptsDisplay.textContent = attempts;
  correctLetters = [];
  wrongLetters = [];
  selectedWord = words[Math.floor(Math.random() * words.length)];
  console.log(selectedWord);
  displayWord();
}

newGame();

// Agrega un evento para escuchar las pulsaciones de teclas
document.addEventListener("keydown", (event) => {
  // Verifica si la tecla presionada es una letra minúscula
  if (/^[a-z]$/.test(event.key)) {
    checkLetter(event.key);
  }
});

function confettiLoco() {
  var defaults = {
    spread: 360,
    ticks: 50,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
    shapes: ["star"],
    colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
  };

  function shoot() {
    confetti({
      ...defaults,
      particleCount: 40,
      scalar: 1.2,
      shapes: ["star"],
    });

    confetti({
      ...defaults,
      particleCount: 10,
      scalar: 0.75,
      shapes: ["circle"],
    });
  }

  setTimeout(shoot, 0);
  setTimeout(shoot, 100);
  setTimeout(shoot, 200);
}
