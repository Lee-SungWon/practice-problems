function accountNumberProtector(cardNumberString) {
  let lastFourDigits = '**';
  let strArray = cardNumberString.split('');
  for (let i = strArray.length - 4; i < strArray.length; i++) {
    lastFourDigits += strArray[i];
  }
  return lastFourDigits;
}
