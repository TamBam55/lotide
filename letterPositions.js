const eqArrays = function(firstArray, secondArray) {
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
if (eqArrays(arr1, arr2)) {
  console.log(`✅ Assertation Passed: ${arr1} === ${arr2}`);
} else {
  console.log(`👎 Assertation Failed: ${arr1} !== ${arr2}`);
}
};

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i <= sentence.length; i--)
  return results;
};


assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("lighthouse of house").e, [9, 18]);
