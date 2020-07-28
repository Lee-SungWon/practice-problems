
function sumArray(array) {
  var sum = 0; // this variable should be declared locally!!! Otherwise, if you run the var multiple times, it's going to add on top of the previous sum.
  for (i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}
