/* payscaleAnalyzer takes in an array of hourly wages
and returns the numeric difference between the highest and lowest wages

1.

*/

function payscaleAnalyzer(payList) {
  return Math.max(...payList) - Math.min(...payList)
}
