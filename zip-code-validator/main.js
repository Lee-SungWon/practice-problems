/*
receives a string as an argument and returns true if
it is a valid zip code, and returns false if it is not a valid zip code
1. checks if string is five characters
2. checks if string is all numbers
3. if both true, returns true; otherwise, false
*/


function zipCodeValidator(zipToValidate) {
  if (!isNaN(zipToValidate) && zipToValidate.length === 5) {
    return true;
  } else {
    return false;
  }
}

/*
Better way to write:

function zipCodeValidator(zipToValidate) {
  return !isNaN(zipToValidate) && zipToValidate.length === 5
}
*/
