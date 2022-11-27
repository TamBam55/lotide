const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  const middleIndex = Math.floor(array.length / 2);
  const middleTwo = array.length % 2;
  if (array.length < 3)
    return [];

  if (middleTwo === 1)
    return [array[middleIndex]];

  if (middleTwo === 0)
    return [array[middleIndex - 1], array[middleIndex]];
};

module.exports = middle;