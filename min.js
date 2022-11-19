const min = function(numbers) {
  let lowestNumber = numbers[0]// Write code here that returns the smallest value in numbers
  // this didn't work cause alphbet --> let vals = numbers.sort()  //sort numbers from small to large
  for (const number of numbers) {
    if (number < lowestNumber) { 
      lowestNumber = number
    }
  // is this the lowest number so far?
} 
 // want it to return the 0 index as that would be the smallest

  return lowestNumber
  // Trying to sort the values from lowest to biggest, then choose first
  //return min
};
// for start; stop; step 

/*
* This is some test runner code that's simply calling our min function defined
* above to verify it's returning the proper minimum. Do not modify it!
*/

const flightPrices = [1260, 490, 599, 1400, 820];
console.log(`The cheapest flight amongst $1260, $490, $599, $1400 and $820 costs \$${min(flightPrices)}`);

const golfScores = [-1, 3, 0, -4, 1, 4, -2];
console.log(`The winning golf score amongst -1, 3, 0, -4, 1, 4 and -2 is ${min(golfScores)}`);

const pageNumbers = [232];
console.log(`The shortest book out of a list of single book with 232 pages has ${min(pageNumbers)} pages`);

const temperatures = [45, 10, -20, 0, 3, -20];
console.log(`The coldest temperature amongst 45C, 10C, -20C, 0C, 3C and -20C is ${min(temperatures)}C`);