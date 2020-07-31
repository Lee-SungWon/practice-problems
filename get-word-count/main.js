function getWordCount (str) {
  var spaces = 0
  for (var i = 0; i <= str.length; i++) {
    if (str[i] === ' ') {
      spaces += 1; // alternative: spaces++
    }
  }
  return spaces + 1;
}
