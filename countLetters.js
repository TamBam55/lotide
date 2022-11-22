const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎👎👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};



const letterCount = {};
const countLetters = function(string) {
  const results = {} //created empty object
  for (const letter of string) {
    if (letter === ' ') continue //<-- continue skips the index 
    if (results[letter]) { // looking for a letter
      results[letter] ++ // adding to the count if there is more than one 
    }
    else {
      results[letter] = 1 
    }
  } 
  return results
}
 
console.log(countLetters('Howdy'));
console.log(countLetters('lighthouse in the house'));


