// takes in the number of coffee cups bought by a customer and adds a free cup for every 6 cups the customer has bought.
// 1. divide by 6
// 2. round down to whole Number
// 3. save that Number
// 4. add that number to the coffee cups

function freeCoffeeCups(coffeeCups) {
  var freeCups = Math.trunc(coffeeCups / 6);
  return coffeeCups + freeCups;
}
