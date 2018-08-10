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

  //check length of string and check first two digits
  var numDigits = cardNumber.length;
  var startingDigits = Number(cardNumber.slice(0,2));
  var firstDigit = Number(cardNumber[0]);

  //Diner's club: Check if numDigits is 14 digits and starts with 38 or 39
  if (numDigits == 14 && (startingDigits == 38 || startingDigits == 39)){
  	return 'Diner\'s Club';
  }

 //American Express: Check if numDigits is 15 digits and starts with 34 or 37
  if (numDigits == 15 && (startingDigits == 34 || startingDigits == 37)){
  	return 'American Express';
  }

  //Visa: Check if numDigits is 13, 16, or 19 digits and card number starts with 4. 
  //Exception: if length is 13 or 19 and prefix is 4903, 4905, 4911, 4936 then return Switch. 
  if ([13,16,19].includes(numDigits) && firstDigit == 4){
  	if ([16,19].includes(numDigits) && [4903, 4905, 4911, 4936].includes(Number(cardNumber.slice(0,4)))){
  		return 'Switch';
  	}
  	return 'Visa';
  }

  //MasterCard: Check if numDigits is 16 digits and starts with 51,52,53,54,or 55
  if (numDigits == 16 && [51,52,53,54,55].includes(startingDigits)){
  	return 'MasterCard';
  }

  //Discover: Check for prefix of 6011, 644-649, or 65, and a length of 16 or 19.
  if ([16,19].includes(numDigits) && (cardNumber.slice(0,4) == 6011 || (cardNumber.slice(0,3) >= 644 && cardNumber.slice(0,3) <= 649) || startingDigits == 65)){
  	return 'Discover';
  }

  //Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
  if ((numDigits >= 12 && numDigits <= 19) && [5018, 5020, 5038, 6304].includes(Number(cardNumber.slice(0,4)))){
  	return 'Maestro';
  }

  //China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19
   if ((numDigits >= 16 && numDigits <= 19) && (cardNumber.slice(0,6) >= 622126 && cardNumber.slice(0,6) <=622925 || (cardNumber.slice(0,3) >= 624 && cardNumber.slice(0,3) <= 626) || (cardNumber.slice(0,4) >= 6282 && cardNumber.slice(0,4) <= 6288))){
  	return 'China UnionPay';
  }

  //Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19
  if ([16,18,19].includes(numDigits) && ([4903, 4905, 4911, 4936, 633, 6759].includes(Number(cardNumber.slice(0,4))) || [564182, 633110].includes(Number(cardNumber.slice(0,6))))){
  	return 'Switch';
  }
}


