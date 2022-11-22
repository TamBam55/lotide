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
  console.log(`👍 Assertation Passed: ${arr1} === ${arr2}`);
} else {
  console.log(`👎 Assertation Failed: ${arr1} !== ${arr2}`);
}
};



assertArraysEqual("Lighthouse Labs", "Bootcamp");
assertArraysEqual(1, 1);
assertArraysEqual(2, 4);
assertArraysEqual("Lighthouse Labs", "Lighthouse Labs");
assertArraysEqual(1, 2);
