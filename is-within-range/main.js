//a function that checks whether a number is within a given range of numbers
/*
1. check whether (1) the number is greater than the highest number or (2) less than the lowest number.
  a. return true only if both (1) and (2) are true.
  b. if either (1) or (2) are not true, return false.
*/

function isWithinRange(number, rangeObject) {
  if (number > rangeObject.min && number < rangeObject.max) {
    return true;
  } else {
    return false;
  }
}
