const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(firstArray, secondArray) {
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }
  return true;
};


const eqObjects = function(object1, object2){
  if (Object.keys(object1).length === Object.keys(object2).length){
    for(let key of Object.keys(object1) ){
        if(Array.isArray(object1[key]) && Array.isArray(object2[key])){
            if (!eqArrays(object1[key], object2[key])){
             return false;       
            }
        }
        
    }
    return true;
  }
return false;    
};


// Test Code - Primitive Values
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertEqual(eqObjects(ab, ba), true));

const abc = { a: "1", b: "2", c: "3" };
console.log(assertEqual(eqObjects(ab, abc), false));

// Test Code - Array Values
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertEqual(eqObjects(cd, dc), true));

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertEqual(eqObjects(cd, cd2), false));