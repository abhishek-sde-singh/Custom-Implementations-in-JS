/*
 * Custom implementation of Reduce method
 * The reduce function in Javascript is used to transform an array into a single value.
 * It executes a provided function for each value of the array, resulting in a single output value.
 */

let arr = [1, 2, 3, 4];

let reducedArr = arr.reduce((acc, curr) => acc + curr, 10);
console.log(reducedArr); // 20

// * If initial value is passed accumulator points to initial value and current points to the 0th index.
// * Like in above example in start acc=10 and curr=1

let reducedArr2 = arr.reduce((acc, curr) => acc + curr);
console.log(reducedArr2); // 10
// * If initial value is not passed acc points to 0th index value and current points to 1st index value.
// * Like in example above in start acc=1 and curr=2

function customReduce(array, callback, initialValue) {
  let index = initialValue !== undefined ? 0 : 1;
  let acc = initialValue !== undefined ? initialValue : array[0];

  for (let i = index; i < array.length; i++) {
    acc = callback(acc, array[i]);
  }
  return acc;
}

let customReduced = customReduce(arr, (acc, curr) => acc * curr, 10);
console.log("custom reduce", customReduced); // custom reduce 240

// * Custom Reduce in Array.prototype
Array.prototype.customReduce2 = function (callback, initialValue) {
  let index = initialValue !== undefined ? 0 : 1;
  let acc = initialValue !== undefined ? initialValue : this[0];

  for (let i = index; i < this.length; i++) {
    acc = callback(acc, this[i]);
  }
  return acc;
};

let customReduced2 = arr.customReduce2((acc, curr) => acc - curr, 100);
console.log("custom reduce in array prototype", customReduced2); //custom reduce in array prototype 90
