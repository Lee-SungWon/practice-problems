function isTheAverageWhole(numbersArray) {
  var sum = 0;
  for (var i = 0; i < numbersArray.length; i++) {
    sum += numbersArray[i];
  }
  var average = sum / numbersArray.length;
  if (Math.floor(average) === average) {
    return true;
  } else {
    return false;
  }
}

alternative solutions:

(1)

return number.isInteger(average); // shortest/best answer

(2)

if (sum % 1) {  // called "modulus"
  return true;
} else {
  return false;
}

Note: (sum % 2) could check for odd/even
