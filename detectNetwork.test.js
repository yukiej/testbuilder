/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 


  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num%2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert;
 

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;
 
  it('has a prefix of 51 and a length of 16', function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a length of 16', function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 54 and a length of 16', function() {
    expect(detectNetwork('5412345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    expect(detectNetwork('5512345678901234')).to.equal('MasterCard');
  })
 
});

describe('Discover', function() {
  var expect = chai.expect;

  it('has a prefix of 6011 and a length of 16', function() {
    expect(detectNetwork('6011123456789012')).to.equal('Discover');
  });

  it('has a prefix of 6011 and a length of 19', function() {
    expect(detectNetwork('6011123456789012345')).to.equal('Discover');
  });

  it('has a prefix of 644 and a length of 16', function() {
    expect(detectNetwork('6441234567890123')).to.equal('Discover');
  });

  it('has a prefix of 644 and a length of 19', function() {
    expect(detectNetwork('6441234567890123456')).to.equal('Discover');
  });

  it('has a prefix of 645 and a length of 16', function() {
    expect(detectNetwork('6451234567890123')).to.equal('Discover');
  });

  it('has a prefix of 645 and a length of 19', function() {
    expect(detectNetwork('6451234567890123456')).to.equal('Discover');
  });


  it('has a prefix of 646 and a length of 16', function() {
    expect(detectNetwork('6461234567890123')).to.equal('Discover');
  });

  it('has a prefix of 646 and a length of 19', function() {
    expect(detectNetwork('6461234567890123456')).to.equal('Discover');
  });


  it('has a prefix of 647 and a length of 16', function() {
    expect(detectNetwork('6471234567890123')).to.equal('Discover');
  });

  it('has a prefix of 647 and a length of 19', function() {
    expect(detectNetwork('6471234567890123456')).to.equal('Discover');
  });

  it('has a prefix of 684 and a length of 16', function() {
    expect(detectNetwork('6481234567890123')).to.equal('Discover');
  });

  it('has a prefix of 648 and a length of 19', function() {
    expect(detectNetwork('6481234567890123456')).to.equal('Discover');
  });

  it('has a prefix of 649 and a length of 16', function() {
    expect(detectNetwork('6491234567890123')).to.equal('Discover');
  });

  it('has a prefix of 649 and a length of 19', function() {
    expect(detectNetwork('6491234567890123456')).to.equal('Discover');
  });

  it('has a prefix of 65 and a length of 16', function() {
    expect(detectNetwork('6512345678901234')).to.equal('Discover');
  });

  it('has a prefix of 65 and a length of 19', function() {
    expect(detectNetwork('6512345678901234560')).to.equal('Discover');
  });
});

//Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19
describe('Maestro', function() {
  var expect = chai.expect;

  it('has a prefix of 5018 and a length of 12', function() {
    expect(detectNetwork('501812345678')).to.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 13', function() {
    expect(detectNetwork('5018123456789')).to.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 14', function() {
    expect(detectNetwork('50181234567890')).to.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 15', function() {
    expect(detectNetwork('501812345678901')).to.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 16', function() {
    expect(detectNetwork('5018123456789012')).to.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 17', function() {
    expect(detectNetwork('50181234567890123')).to.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 18', function() {
    expect(detectNetwork('501812345678901234')).to.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 19', function() {
    expect(detectNetwork('5018123456789012345')).to.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 12', function() {
    expect(detectNetwork('502012345678')).to.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 13', function() {
    expect(detectNetwork('5020123456789')).to.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 14', function() {
    expect(detectNetwork('50201234567890')).to.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 15', function() {
    expect(detectNetwork('502012345678901')).to.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 16', function() {
    expect(detectNetwork('5020123456789012')).to.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 17', function() {
    expect(detectNetwork('50201234567890123')).to.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 18', function() {
    expect(detectNetwork('502012345678901234')).to.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 19', function() {
    expect(detectNetwork('5020123456789012345')).to.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 12', function() {
    expect(detectNetwork('503812345678')).to.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 13', function() {
    expect(detectNetwork('5038123456789')).to.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 14', function() {
    expect(detectNetwork('50381234567890')).to.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 15', function() {
    expect(detectNetwork('503812345678901')).to.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 16', function() {
    expect(detectNetwork('5038123456789012')).to.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 17', function() {
    expect(detectNetwork('50381234567890123')).to.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 18', function() {
    expect(detectNetwork('503812345678901234')).to.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 19', function() {
    expect(detectNetwork('5038123456789012345')).to.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 12', function() {
    expect(detectNetwork('630412345678')).to.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 13', function() {
    expect(detectNetwork('6304123456789')).to.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 14', function() {
    expect(detectNetwork('63041234567890')).to.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 15', function() {
    expect(detectNetwork('630412345678901')).to.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 16', function() {
    expect(detectNetwork('6304123456789012')).to.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 17', function() {
    expect(detectNetwork('63041234567890123')).to.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 18', function() {
    expect(detectNetwork('630412345678901234')).to.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 19', function() {
    expect(detectNetwork('6304123456789012345')).to.equal('Maestro');
  });

});


//China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
describe('China UnionPay', function() {
  var expect = chai.expect;

  //prefix 622126-622925, length of 16-19
  for (var prefix = 622126; prefix <= 622925; prefix++) {
    for (var numLength = 16; numLength <= 19; numLength++) {
      (function(prefix, numLength) {    
        it('has a prefix of ' + prefix + ' and a length of ' + numLength, function(){
          var testCardNumber = prefix + '0'.repeat(numLength-prefix.toString().length);
          expect(detectNetwork(testCardNumber)).to.equal('China UnionPay');
        });    
      })(prefix,numLength)
    }
  }

  //prefix 624-626, length of 16-19
  for (var prefix = 624; prefix <= 626; prefix++) {
    for (var numLength = 16; numLength <= 19; numLength++) {
      (function(prefix, numLength) {    
        it('has a prefix of ' + prefix + ' and a length of ' + numLength, function(){
          var testCardNumber = prefix + '0'.repeat(numLength-prefix.toString().length);
          expect(detectNetwork(testCardNumber)).to.equal('China UnionPay');
        });    
      })(prefix,numLength)
    }
  }

  //prefix 6282-6288, length of 16-19
  for (var prefix = 6282; prefix <= 6288; prefix++) {
    for (var numLength = 16; numLength <= 19; numLength++) {
      (function(prefix, numLength) {    
        it('has a prefix of ' + prefix + ' and a length of ' + numLength, function(){
          var testCardNumber = prefix + '0'.repeat(numLength-prefix.toString().length);
          expect(detectNetwork(testCardNumber)).to.equal('China UnionPay');
        });    
      })(prefix,numLength)
    }
  }
});

//Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
describe('Switch', function(){
  var expect = chai.expect; 
  var prefixArray = [4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759];
  var lengthArray = [16, 18, 19];

  //Loop over all prefixes from prefixArray, for all lengths in lengthArray
  for (var prefixIndex = 0; prefixIndex < prefixArray.length; prefixIndex++) {
    for (var lengthIndex = 0; lengthIndex < lengthArray.length; lengthIndex++) {
      var prefix = prefixArray[prefixIndex];
      var numLength = lengthArray[lengthIndex];
      (function(prefix, numLength) {    
        it('has a prefix of ' + prefix + ' and a length of ' + numLength, function(){
          var testCardNumber = prefix + '0'.repeat(numLength-prefix.toString().length);
          expect(detectNetwork(testCardNumber)).to.equal('Switch');
        });    
      })(prefix,numLength)
    }
  }

});