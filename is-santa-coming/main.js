function isSantaComing(dateObject) {
  if (dateObject.getDate() === 24 && dateObject.getMonth() === 11) {
    return true;
  } else {
    return false;
  }
}

//return dateObject.getDate() === 24 && dateObject.getMonth() === 11
// this returns bullion as well without the use of conditional
