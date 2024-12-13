const colors = ["rouge", "bleu", "vert", "jaune"];
const secretCombinaison = ["rouge", "bleu"];

// console.log(colors); // Vérification des couleurs possibles
// console.log(secretCombinaison); // Vérification de la combinaison secrète

function isValidGuess(guess) {
  if (guess.length !== secretCombinaison.length) {
    return false;
  }

  for (let i = 0; i < guess.length; i++) {
    if (!colors.includes(guess[i])) {
      return false;
    }
  }
  return true;
}

// Test de la fonction isValidGuess
//console.log(isValidGuess(["rouge", "bleu"])); // true
//console.log(isValidGuess(["rouge", "noir"])); // false
//console.log(isValidGuess(["rouge"])); // false

function isCorrectCombinaison(guess) {
  for (let i = 0; i < guess.length; i++) {
    if (guess[i] !== secretCombinaison[i]) {
      return false;
    }
  }
  return true;
}

//console.log(isCorrectCombinaison(["rouge", "bleu"])); // true
//console.log(isCorrectCombinaison(["bleu", "rouge"])); // false

function playGame() {
  const maxTest = 12;
  let test = 0;
  let won = false;

  while (test < maxTest && !won) {
    const message = prompt(
      `Essai ${test + 1}/${maxTest} : Choisissez une combinaison de couleurs`
    );
    const guess = message.split(",");
    for (let i = 0; i < guess.length; i++) {
      guess[i] = guess[i].trim().toLocaleLowerCase();
    }
    if (!isValidGuess(guess)) {
      console.log("Combinaison incorrect");
      continue;
    }
    if (isCorrectCombinaison(guess)) {
      console.log(
        "Bravo ! Vous avez trouvé la bonne combinaison de couleurs !"
      );
      won = true;
    } else {
      let goodPlaced = 0;
      let notGoodPlaced = 0;
      for (let i = 0; i < guess.length; i++) {
        if (guess[i] === secretCombinaison[i]) {
          goodPlaced++;
        } else if (secretCombinaison.includes(guess[i])) {
          notGoodPlaced++;
        }
      }
      console.log(`Couleurs bien placées : ${goodPlaced}`);
      console.log(`Couleurs mal placées : ${notGoodPlaced}`);
    }
    test++;
  }
  if (!won) {
    console.log(
      "Dommage, vous n'avez pas trouvé la bonne combinaison de couleurs."
    );
  }
}
playGame();
