/*
removing null values from an array

1. check each item in an array to see if its value is null or something else.
2. if the value is null, take that value out of the array.
3. return the array.
*/


function removeNullValues(array) {
  for (var i = array.length - 1; i >= 0; i--) {
    if (array[i] === null) {
      array.splice(i, 1);
    }
  }
  return array;
}


https://love2dev.com/blog/javascript-remove-from-array/#remove-from-array-splice-value

// incrementing & splice: This works if you only want to remove a single item. If you want to remove multiple items that match your criteria there is a glitch.
// As the items are removed from the array the index still increments and the next item after your matched value is skipped.
// The simple solution is to modify the above example to decrement the index variable so it does not skip the next item in the array.
