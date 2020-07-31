function decimalPlaceCounter(stringNumber) {
  if(stringNumber.includes('.')){
  var arr = stringNumber.split('.');
  return arr[1].length;
  } else {
    return 0;
  }
}
