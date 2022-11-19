const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const assertArraysEqual = function(array1, array2) {
  if (array1 === array2) {
    console.log('✅✅✅  Arrays are the same : [${array1}] === [${array2}]');
  } else {
    console.log('🔴🔴🔴  Arrays are not the same : [${array1}] !== [${array2}]');
  }
}

const middle = function(array) {
  const middleIndex = Math.floor(array.length / 2)
  const middleTwo = array.length % 2 
  if (array.length < 3)
    return []

  if (middleTwo === 1)
  return [array [middleIndex]]
    
 if (middleTwo === 0)
 return [array [middleIndex -1], array [middleIndex]]
}
//console.log(middle([1, 2, 3, 4, 5]))
/*For arrays with one or two elements, there is no middle. Return an empty array.*/
console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []

/*For arrays with odd number of elements, an array containing a single middle element should be returned.*/
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]

//let middle = arr[Math.floor((arr.length - 1) / 2)]
/*For arrays with an even number of elements, an array containing the two elements in the middle should be returned*/
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]


