// Given an array, write a function to calculate its depth. Assume that a normal array has a depth of 1?
function getArrayDepth(value) {
  return Array.isArray(value)
    ? 1 + Math.max(0, ...value.map(getArrayDepth))
    : 0;
}

let testRy = [1, [2, [3, 4]]];

console.log(getArrayDepth(testRy));

console.log(testRy);
