const assertArraysEqual = function(array1, array2) {
  if (array1 === array2) {
    console.log('👍👍👍  Arrays are the same : [${array1}] === [${array2}]');
  } else {
    console.log('👎👎👎  Arrays are not the same : [${array1}] !== [${array2}]');
  }
}

const takeUntil = function(array, callback) {
  const results = []
  for (const item of array) {
    if (callback(item)) {
      return results
    }
      results.push(item); 
  }
   return results;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);