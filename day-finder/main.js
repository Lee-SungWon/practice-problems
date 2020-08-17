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
  getDay()
}
