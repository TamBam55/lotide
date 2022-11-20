const eqArrays = function(firstArray, secondArray) {
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }
  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect;
  if (eqObjects(actual), expectedObject)) {
    console.log(`✅ Assertation Passed: ${inspect(actual))} === ${inspect(expectedObject)}`);
  } else {
    console.log(`🔴 Assertation Failed: ${inspect(actual))} !== ${inspect(expectedObject)}`);
  }

};