/*
returns a string which will be the day of the week for the argument date


*/


function dayFinder(stringDate) {
  var days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  var dayOfTheWeek = new Date(stringDate).getDay();
  return days[dayOfTheWeek];
}

console.log(dayFinder('05/22/1946'))
console.log(dayFinder('01/20/2001'))
console.log(dayFinder('03/25/1988'))
