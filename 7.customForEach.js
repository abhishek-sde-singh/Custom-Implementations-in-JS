/*
 * The forEach loop in JavaScript is an array method used to execute a provided function once
 * for each array element. It allows you to perform operations on each item without needing
 * to manage the loop manually.
 */

const arrData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

Array.prototype.customForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

arrData.customForEach((element) => {
  console.log(element);
});
