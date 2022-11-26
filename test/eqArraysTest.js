const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual([1, 2, 3], [1, 2, 3]); // => true
assertEqual([1, 2, 3], [3, 2, 1]); // => false

assertEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertEqual(["1", "2", "3"], ["1", "2", 3]); // => false
assertEqual([1, 2, 3, 4], [1, 2, 3,]);

// What if we had 123 and 1234 _ how would that break