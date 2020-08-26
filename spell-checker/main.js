function spellChecker(userWords, correctWords) {
  let correct = [];
  let incorrect = [];
  let solution = {};
  for (let i = 0; i < userWords.length; i++) {
    if (userWords[i] === correctWords[i]) {
      correct.push(userWords[i])
    } else {
      incorrect.push(userWords[i])
    }
  }
  solution.correct = correct;
  solution.incorrect = incorrect;
  return solution;
}
