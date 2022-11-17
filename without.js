const assertArraysEqual = function(array1, array2) {
  if (array1 === array2) {
    console.log('✅✅✅  Arrays are the same : [${array1}] === [${array2}]');
  } else {
    console.log('🔴🔴🔴  Arrays are not the same : [${array1}] !== [${array2}]');
  }
}
assertArraysEqual("Lighthouse Labs", "Bootcamp");
assertArraysEqual(1, 1);
assertArraysEqual(2, 4);
assertArraysEqual("Lighthouse Labs", "Lighthouse Labs");
assertArraysEqual(1, 2);


const eqArrays = function(firstArray, secondArray) {
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }
  return true;
};

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]