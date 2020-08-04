function decimalPlaceCounter(stringNumber) {
  var arr = stringNumber.split('.');
  if (stringNumber.includes('.')) { //alt: if (arr[1]) {
  return arr[1].length;
  } else {
    return 0;
  }
}

// Alternatives:

Count backwards:

// function decimalPlaceCounter(stringNumber) {
//   var counter = 0;
//   for (var i = stringNumber.length - 1; i > 0; i--) {
//     if(stringNumber[i] === '.') {
//       return counter;
//     }
//     counter++;
//   }
//   return 0;
// }

Count forwards:

// function decimalPlaceCounter(stringNumber) {
//   for (var i = 0; i < stringNumber.length; i++) {
//     if (stringNum[i] === '.') {
//       return stringNum.length - 1 - i;
//     }
//   }
// }
