const checkSum = (cardNumber) => {
  // create an array for each of the card numbers in cardNumber
  const arr = cardNumber.split('').map(num => Number(num))

  // create a reducer function
  // if the index is odd, double the number, then split the digits and sum them
  // example: 4 => 6 * 2 = 12 => 1 + 2 = 3
  // first the number is doubled
  // if the number is less than 10, add it to the total
  // if the number > 10, add the modeler of the number plus 1 to the total
  // if the index is odd, add it to the total
  const reducer = (previous, current, index) => {
    if (index % 2 === 1) {
      const currentByTwo = current * 2
      if (currentByTwo < 10) {
        return previous + currentByTwo
      } else {
        return previous + currentByTwo % 10 + 1
      }
    } else {
      return previous + current
    }
  }
  // use the reducer function to create the number that we need to check
  // This will be running on the reveresed direction of the array
  return arr.reverse().reduce(reducer)
}


const cardType = (cardNumber) => {
  // regex created for master card starting with 51, 52, 53, 54, 55
  // regex created for AMEX starting with 34, 37
  const masterCardRegEx = /^5[1-5]/
  const amexRegEx = /^3[4,7]/

  // if the checkSum doesn't end in a zero, it is an invalid card number
  // then we need to check the cardnumber type
  // if the first 2 digits match 5 and then the above mastercard numbers, it is master card
  // if the first 2 digits match 3 and then the above American Express numbers, it is an American Express card
  // if the number starts with a 4, it is a VISA card
  // if it doesn't match these card types then it is also invalid
  // return the numnber and its card type or invalid

  if (masterCardRegEx.test(cardNumber)) {
    return "MASTERCARD"
  } else if (amexRegEx.test(cardNumber)) {
    return "AMEX"
  } else if (cardNumber[0] === '4') {
    return "VISA"
  } else {
    return "INVALID"
  }
}

const checkCreditcard = (cardNumber) => {
  const cardSum = checkSum(cardNumber)
  if (cardSum % 10 === 0) {
    return cardType(cardNumber)
  } else {
  return "INVALID"
  }
}

module.exports = { checkSum, cardType, checkCreditcard };
