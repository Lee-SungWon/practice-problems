//a function that checks whether a number is within a given range of numbers
/*
1. check whether (1) the number is greater than or equal to the highest number or (2) less than or equal to the lowest number.
  a. return true only if both (1) and (2) are true.
  b. if either (1) or (2) are not true, return false.
*/

function isWithinRange(number, rangeObject) {
  if (number >= rangeObject.min && number <= rangeObject.max) {
    return true;
  } else {
    return false;
  }
}

// alt
if (number > rangeObject.min || number < rangeObject.max) {
  return false;
} else {
  return true;
}