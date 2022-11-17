const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    console.assert(true, actual !== expected);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    console.assert(true, actual === expected);
  }
};


let countLetters = function(letterCount) {
  let x = 1;
  for (let i = 0; i < letterCount.length; i++) {
    if (letterCount[i] === letterCount[i + 1]) {
      x++;
    } else {
      console.log(${letterCount[i]}, ${x});
      x = 1;
    }
  }
};

countLetters('Howdy');
countLetters('Tammy');

/*let letterCount = {};

let countLetters = "";
for (let x of lettercount) {
text += x;
} 

I think that is how it is suppose to go, as current code is only counting letters that have a occured once, not how many times they occured*/