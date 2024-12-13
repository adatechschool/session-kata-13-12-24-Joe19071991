const colors = ["rouge", "bleu", "vert", "jaune"];
const secretCombinaison = ["rouge", "bleu"];

// console.log(colors); // Vérification des couleurs possibles
// console.log(secretCombinaison); // Vérification de la combinaison secrète

function isValidGuess(guess) {
  if (guess.length !== secretCombinaison.length) {
    return false;
  }
  return guess.every((color) => colors.includes(color));
}

// Test de la fonction isValidGuess
// console.log(isValidGuess(["rouge", "bleu"])); // true
// console.log(isValidGuess(["rouge", "noir"])); // false
// console.log(isValidGuess(["rouge"])); // false

function isCorrectCombinaison(guess) {
  return guess.every((color, index) => color === secretCombinaison[index]);
}

console.log(isCorrectCombinaison(["rouge", "bleu"])); // true
console.log(isCorrectCombinaison(["bleu", "rouge"])); // false
