const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns 2, 3 for [1, 2, 3]", () => {
    assert.strictEqual(tail([1, 2, 3]), 2, 3);
  });

  it("returns '6, 7 ' for ['5, 6, 7']", () => {
    assert.strictEqual(tail(['5, 6, 7']), '6, 7'); 
  })
  
});


// // Test Case 1: Check the returned array elements
// const result = tail(["Hello", "Lighthouse", "Labs", "Tammy"]);


// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result, "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"
// assertEqual(result[2], "Tammy")// trying to ensure that 3n element is Tammy.
// // ^ Why is that showing undefined? = figured out I put 1 in my slice method YAY
// // Test Case 2: ...
// // ...
// // Test Case: Check the original array 