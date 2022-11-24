const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎👎👎 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(obj, val) {
  for (const key in obj) {
    if (obj[key] === val) { //this is looking at the key and determining the val
       return key
  }
 }
}

const findKeyByValue = function(obj, val) {
  let out = []; // empty array
  for (const key in obj) {
    if (obj[key] === val) { //this is looking at the key and determining the val
       out.push(key);
  }
 }
 return out;
}