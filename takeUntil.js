const assertArraysEqual = function(array1, array2) {
  if (array1 === array2) {
    console.log('✅✅✅  Arrays are the same : [${array1}] === [${array2}]');
  } else {
    console.log('🔴🔴🔴  Arrays are not the same : [${array1}] !== [${array2}]');
  }
}

const takeUntil = function(array, callback) {
  const results - []
  for (const item of array) {
    if (callback(item)) {
      return results
    }
      results.push(item); 
  }
  return results;
}