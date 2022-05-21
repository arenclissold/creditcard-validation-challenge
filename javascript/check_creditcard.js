const checkCreditcard = (cardNumber) => {
    // create an array for each of the card numbers cardNumber
    const arr = String(cardNumber).split('').map(num => Number(num))

    // define the second number required for mastercard and American Express card numbers
    const masterCard = [1, 2, 3, 4, 5]
    const americanExpress = [4, 7]

    // create a reducer function
    // This will be running on the reveresed direction of the array
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
  const checkSum = array => array.reverse().reduce(reducer)

// if the checkSum doesn't end in a zero, it is an invalid card number
// then we need to check the cardnumber type
// if the first 2 digits match 5 and then the above mastercard numbers, it is master card
// if the first 2 digits match 3 and then the above American Express numbers, it is an American Express card
// if the number starts with a 4, it is a VISA card
// if it doesn't match these card types then it is also invalid
// return the numnber and its card type or invalid
    if ((checkSum(arr)) % 10 !== 0) {
        return `Number: ${cardNumber}\nINVALID CARD NUMBER`
    } else if (arr[0] === 5 && arr[1].match(masterCard)) {
        return `Number: ${cardNumber}\nMasterCard`
    } else if (arr[0] === 3 && arr[1].match(americanExpress)) {
        return `Number: ${cardNumber}\nAmerican Express`
    } else if (arr[0] === 4) {
        return `Number: ${cardNumber}\nVISA`
    } else {
        return `Number: ${cardNumber}\nINVALID CARD NUMBER`
    }
}

console.log(checkCreditcard(4003600000000014))
console.log(checkCreditcard(6176292929))
