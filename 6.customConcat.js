const arr1 = [1, 2, 3];
const arr2 = [4, [5, 6]];
const arr3 = [7, 8, 9];

function customConcat(array, ...args) {
  let result = [...array];
  for (let i = 0; i < args.length; i++) {
    const current = args[i];
    if (Array.isArray(current)) {
      result.push(...current);
    } else {
      result.push(current);
    }
  }
  return result;
}

console.log(customConcat(arr1, arr2, arr3, 10, 30)); // [ 1, 2, 3, 4, [ 5, 6 ], 7, 8, 9, 10, 30 ]

// * In Array.prototype

Array.prototype.customConcat = function (...args) {
  let result = [...this];
  for (let i = 0; i < args.length; i++) {
    const current = args[i];
    if (Array.isArray(current)) {
      result.push(...current);
    } else {
      result.push(current);
    }
  }
  return result;
};

let concatedArray = arr1.customConcat(arr2, arr3, 10, 30);
console.log("in prototype", concatedArray); // in prototype [ 1, 2, 3, 4, [ 5, 6 ], 7, 8, 9, 10, 30 ]
