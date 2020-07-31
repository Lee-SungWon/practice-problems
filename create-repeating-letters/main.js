function createRepeatingLetters(word, numOfRepeats) {
  var newWord = '';
  for (var i = 0; i < word.length; i++) {
    for (var n = 0; n < numOfRepeats; n++) { // alternative: result += word[i].repeat(numOfRepeats);
      newWord += word[i]
    }
  }
  return newWord;
}
