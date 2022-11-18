const assertArraysEqual = function(array1, array2) {
  if (array1 === array2) {
    console.log('✅✅✅  Arrays are the same : [${array1}] === [${array2}]');
  } else {
    console.log('🔴🔴🔴  Arrays are not the same : [${array1}] !== [${array2}]');
  }
}

const eqArrays = function(firstArray, secondArray) {
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }
  return true;
};


const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  console.log(`array: `, array);
  console.log(`callback: `, callback);

const results = [];
for (let item of array) {
  results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);

console.log(results1);