function accountNumberProtector(cardNumberString) {
  let lastFourDigits = '**';
  let strArray = cardNumberString.split('');
  for (let i = strArray.length - 4; i < strArray.length; i++) {
    lastFourDigits += strArray[i];
  }
  return lastFourDigits;
}

/* alternatives

const accountNumberProtector = cardNumberString => {
  return `**${cardNumberString[12]}${cardNumberString[13]}${cardNumberString[14]}${cardNumberString[15]}`
}

function accountNumberProtector(cardNumberString) {
  return '**' + cardNumberString.substring(12);
}

function accountNumberProtector(cardNumberString) {
  return `**${cardNumberString
    .split("")
    .slice(cardNumberString.length - 4, cardNumberString.length)
    .join("")}`;
}
