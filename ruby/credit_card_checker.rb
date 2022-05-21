def visa?(card)
  # TODO: A visa card starts with a 4
  card.delete(" ")[0] == "4"
end

def mastercard?(card)
  # TODO: A mastercard card starts with a 5
  card.delete(" ")[0] == "5"
end

def valid_card?(card)
  # TODO: Implement the validator. Return true if the card is valid, false otherwise.
  # return false if the card number is empty
  return false if card.length.zero?

  # delete spaces in the card string, reverse it, turn it into an array
  # turn each string of the array into a number
  # the reversed araay is required to perform Luhn's algorithm
  reverse_array = card.delete(" ").reverse.chars.map { |num| num.to_i }
  # map over the reverse array
  luhn_array = reverse_array.map.with_index do |num, i|
    # if the index is odd, multiply it by 2.
    # if it is then greater than 10, minus it by 9 else keep the multiplied number
    if i.odd?
      (num * 2) > 9 ? (num * 2) - 9 : num * 2
      # if the index is even, keep the number the same
    else
      num
    end
  end
  (luhn_array.sum % 10).zero?
  # if the sum of the numebrs in the array modular 10 is 0, it is a valid credit card number
end
