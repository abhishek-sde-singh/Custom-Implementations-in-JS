/*
 * Custom Implementation of filter function
 * The filter function in Javascript creates a new array with all the elements that
 * pass the test implemented by the provided function. It does not change the original array.
 */

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let filteredArr = arr.filter((num) => num % 2 == 0);
console.log(filteredArr); // [ 2, 4, 6, 8 ]
console.log(arr); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]

function customFilter(array, callback) {
  let res = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      res.push(array[i]);
    }
  }
  return res;
}

let customFilteredArr = customFilter(arr, (num) => num % 3 == 0);
console.log("custom filter", customFilteredArr); // custom filter [ 3, 6, 9 ]

// * Custom filter in Array.prototype
Array.prototype.customFilter2 = function (callback) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      res.push(this[i]);
    }
  }
  return res;
};

let res = arr.customFilter2((num) => num % 4 == 0);
console.log("custom map in array prototype", res); // custom map in array prototype [ 4, 8 ]
