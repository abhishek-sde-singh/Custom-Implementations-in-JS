/*
 * Custom Implementation of map function
 * The map function in Javascript is used to iterate over an array and apply a
 * transformation to each of element, returning a new array with the transformed elements.
 * It does not change the original array
 */

let arr = [1, 2, 3, 4, 5];

let transformedArr = arr.map((num) => num * 2);
console.log(transformedArr); // [ 2, 4, 6, 8, 10 ]
console.log(arr); // [ 1, 2, 3, 4, 5 ]

function customMap(array, callback) {
  let res = [];
  for (let i = 0; i < array.length; i++) {
    res.push(callback(array[i]));
  }
  return res;
}

let ans = customMap(arr, (num) => num * 4);
console.log("custom map", ans); // custom map [ 4, 8, 12, 16, 20 ]

// * Custom Map in Array.prototype
Array.prototype.customMap2 = function (callback) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(callback(this[i]));
  }
  return res;
};

let res = arr.customMap2((num) => num * 5);
console.log("custom map in array prototype", res); // custom map in array prototype [ 5, 10, 15, 20, 25 ]
