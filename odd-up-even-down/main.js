/*
takes in an array of numeric values and increments any odd values by 1, and decrements any even values by 1
1. go through each item in an array
2. if the value of the item is odd, increment by one
3. if the value of the item is even, decrement by one
*/

function oddUpEvenDown(array) {
  var newArr = []
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 1) {
      array[i] += 1;  //alternative: result.push(array[i] - 1) //can't increment or decrement because that will affect the original
    } else {
      array[i] -= 1; //alternative: result.push(array[i] + 1)
    }
    newArr.push(array[i]);
  }
  return newArr;
}

/*
array = array.slice() // make a copy of it through slice method & the new array it directly.  can increment or decrement now.
*/
