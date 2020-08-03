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
