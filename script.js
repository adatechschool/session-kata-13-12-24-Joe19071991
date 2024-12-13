const colors = ["rouge", "bleu", "vert", "jaune"];
const secretCombinaison = ["rouge", "bleu"];
//console.log(colors);
//console.log(secretCombinaison);

function isValidGuess(guess) {
  if (guess.length !== secretCombinaison.length) {
    return false;
  }
  return guess.every((color) => colors.includes(color));
}

console.log(isValidGuess(["rouge", "bleu"]));
console.log(isValidGuess(["rouge, noir"]));
console.log(isValidGuess(["rouge"]));
