/*
takes in a string word as an argument and returns an array in which the word is spelled out by adding a letter for each index until the word is completed
1. run through the word from first character to the last
2. identify the character
3. put that as an item in an array and add that item in placeholder
*/


// function wordBuilder(wordToSpell) {
//   var newArr = []
//   var arr = wordToSpell.split("");
//   for (var i = 0; i < arr.length; i++) {
//     for (var i = arr[i]; i >= 0; i--) {
//       var word
//       word += arr[i]
//       newArr.push(word);
//     }
//   }
//   return newArr;
// }

function wordBuilder(wordToSpell) {
  var placeholder = '';
  var result = [];
  for (var i = 0; i < wordToSpell.length; i++) {
    placeholder += wordToSpell[i];
    result.push(placeholder);
  }
  return result;
}
