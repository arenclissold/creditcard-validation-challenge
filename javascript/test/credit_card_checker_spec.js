const assert = require("assert");
const { cleanCardNumber, checkSum, cardType, checkCreditcard } = require("../credit_card_checker.js");

describe("cleanCardNumber", () => {
  it("should convert a numerical input into a string", () => {
    assert.equal(cleanCardNumber(4485888168897969), '4485888168897969');
  });

  it("should remove whitespace or special characters between numbers", () => {
    assert.equal(cleanCardNumber('  4485 8881-6889-7969'), '4485888168897969');
  });
});

describe("checkSum", () => {
  it("should return the correct checksum as a result of Luhn's algorithm", () => {
    assert.equal(checkSum('4003600000000014'), 20);
  });

  it("should return the correct checksum for an invalid card", () => {
    assert.equal(checkSum('4242424242424241'), 79);
  });
});

describe("cardType", () => {
  it("It should return MASTERCARD when cardNumber starts with 51", () => {
    assert.equal(cardType('5155555555554444'), 'MASTERCARD');
  });

  it("It should return MASTERCARD when cardNumber starts with 52", () => {
    assert.equal(cardType('5255555555554444'), 'MASTERCARD');
  });

  it("It should return MASTERCARD when cardNumber starts with 53", () => {
    assert.equal(cardType('5355555555554444'), 'MASTERCARD');
  });

  it("It should return MASTERCARD when cardNumber starts with 54", () => {
    assert.equal(cardType('5455555555554444'), 'MASTERCARD');
  });

  it("It should return MASTERCARD when cardNumber starts with 55", () => {
    assert.equal(cardType('5555555555554444'), 'MASTERCARD');
  });

  it("It should return AMEX when cardNumber starts with 34", () => {
    assert.equal(cardType('348282246310005'), 'AMEX');
  });

  it("It should return AMEX when cardNumber starts with 37", () => {
    assert.equal(cardType('378282246310005'), 'AMEX');
  });

  it("It should return VISA when cardNumber starts with 4", () => {
    assert.equal(cardType('4222222222222'), 'VISA');
  });

  it("It should return INVALID for all other numbers", () => {
    assert.equal(cardType('0222222222222'), 'INVALID');
  });
});

describe("checkCreditcard", () => {
  it("should return the correct type of a valid card", () => {
    assert.equal(checkCreditcard('4003-6000-0000-0014'), 'VISA');
  });

  it("should return invalid for any card that fails Luhn's algorithm", () => {
    assert.equal(checkCreditcard('1234567890'), 'INVALID');
  });
});
