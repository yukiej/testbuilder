// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.

  //check length of string and first two digits
  var numDigits = cardNumber.length
  var startingDigits = cardNumber.slice(0,2)

  //Diner's club: Check if numDigits is 14 digits and starts with 38 or 39
  if (numDigits == 14 && (startingDigits == 38 || startingDigits == 39)){
  	return 'Diner\'s Club';
  }

 //American Express: Check if numDigits is 15 digits and starts with 34 or 37
  if (numDigits == 15 && (startingDigits == 34 || startingDigits == 37)){
  	return 'American Express';
  }

  //Visa: Check if numDigits is 13, 16, or 19 digits and starts with 4
  if ([13,16,19].includes(Number(numDigits)) && startingDigits[0]==4){
  	return 'Visa';
  }

  //MasterCard: Check if numDigits is 16 digits and starts with 51,52,53,54,or 55
  if (numDigits == 16 && [51,52,53,54,55].includes(Number(startingDigits))){
  	return 'MasterCard';
  }
};


