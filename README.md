# Credit Card Validation Challenge 💳

In the following files are solutions to the below problem of validating credit cards. I have written solutions for both JS and Ruby with associated tests.

Moving into each of their directores, you can test JS by running mocha in the terminal and test Ruby by running rspec in the terminal.

This was a great opportunity to learn testing for JS and Ruby 🧐


Below is the propt for solving this challenge

  Luhn's algorithm is as follows:

    Multiply every other digit by 2, starting with the number’s second-to-last digit, and then add those products’ digits together.
    Add the sum to the sum of the digits that weren’t multiplied by 2.
    If the total’s last digit is 0 (or, put more formally, if the total modulo 10 is congruent to 0), the number is valid!

  Example with visa: 4003600000000014.


    Okay, let’s multiply each of the  digits by 2 starting with the second last digit:

    1•2 + 0•2 + 0•2 + 0•2 + 0•2 + 6•2 + 0•2 + 4•2

    That gives us:

    2 + 0 + 0 + 0 + 0 + 12 + 0 + 8

    Now let’s add those products’ digits (i.e., not the products themselves) together:

    2 + 0 + 0 + 0 + 0 + 1 + 2 + 0 + 8 = 13

    Now let’s add that sum (13) to the sum of the digits that weren’t multiplied by 2 (starting from the end):

    13 + 4 + 0 + 0 + 0 + 0 + 0 + 3 + 0 = 20

    Yup, the last digit in that sum (20) is a 0, so the card is legit!


  Examples:

  $ ./credit
  Number: 4003600000000014
  VISA

  $ ./credit
  Number: 6176292929
  INVALID


PS: I solved this problem for each language at different times so the solution and testing is a bit different 😁
