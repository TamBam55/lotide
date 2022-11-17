const assertEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);

  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);

  }
};

const eqArrays = function(firstArray, secondArray) {
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }
  return true;
};


assertEqual([1, 2, 3], [1, 2, 3]) // => true
assertEqual([1, 2, 3], [3, 2, 1]) // => false

assertEqual(["1", "2", "3"], ["1", "2", "3"]) // => true
assertEqual(["1", "2", "3"], ["1", "2", 3]) // => false
assertEqual([1, 2, 3, 4], [1, 2, 3,])

// What if we had 123 and 1234 _ how would that break

