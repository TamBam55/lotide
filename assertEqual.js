const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎👎👎 Assertion Failed: ${actual} !== ${expected}`);
    // still unsure about ${} - seems to be calling the value of a function?
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(55, 55);
assertEqual("Lighthouse", "Lighthouse");
assertEqual("Tammy", "TaMmy");
