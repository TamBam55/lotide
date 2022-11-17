const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    console.assert(true, actual !== expected);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    console.assert(true, actual === expected);
  }
};


const letterCount = {};
const countLetters = function(string) {
  for (let i = 0; i < string.length; i++) {
    let ch = string[i];
    (countLetters[ch]) = 0; {
      countLetters[ch]++;
    }
    console.log(countLetters);
  }
};
countLetters('Howdy');
countLetters('lighthouse in the house');

/*let letterCount = {};

let countLetters = "";
for (let x of lettercount) {
text += x;
} 

I think that is how it is suppose to go, as current code is only counting letters that have a occured once, not how many times they occured*/

/*let countLetters = (numLetters) => {
  let x = 1;
  for (let i = 0; i < numLetters.length; i++) {
    if (numLetters[i] === numLetters[i + 1]) {
      x++;
    } else {
      console.log(${numLetters[i]}, ${x});
      x = 1;
    }
  }
};*/