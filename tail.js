const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎👎👎 Assertion Failed: ${actual} !== ${expected}`);
    // still unsure about ${} - seems to be calling the value of a function?
  }
};

// Tail function 

const tail = function(array) {
  return array.slice(0)
}

// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs", "Tammy"]);


assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
assertEqual(result[3], "Tammy")// trying to ensure that 3n element is Tammy.
// ^ Why is that showing undefined? = figured out I put 1 in my slice method YAY
// Test Case 2: ...
// ...
// Test Case: Check the original array 
