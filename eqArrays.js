const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    console.assert(true, actual !== expected);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    console.assert(true, actual === expected);
  }
};

const eqArrays = function(arr1, arr2) {
   (let i = 0; i === 0; i ++) {
    if (arr1 === arr2)
    return true (
    ) else {
    if (arr1 !== arr2) {
    return false
    }
    }
  }
}


assertEqual(eqArrays([1, 2, 3], [1, 2, 3])) // => true
assertEqualeqArrays([1, 2, 3], [3, 2, 1]) // => false

assertEqualeqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
assertEqualeqArrays(["1", "2", "3"], ["1", "2", 3]) // => false