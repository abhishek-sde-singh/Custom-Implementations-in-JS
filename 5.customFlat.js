/*
 * The flat() method creates a new array with all the sub-array elements concatenated
 * into it recursively up to the specified depth. It does not modify the original array.
 * If no depth provided it defaults to one
 */

let nestedArray = [1, [2, [3, [4, [5, [6]]]]]];
let flattendArray = nestedArray.flat();
console.log(flattendArray); // [ 1, 2, [ 3, [ 4, [Array] ] ] ]

let flattendArray2 = nestedArray.flat(4);
console.log(flattendArray2); // [ 1, 2, 3, 4, 5, [ 6 ] ]

Array.prototype.customFlat = function (depth = 1) {
  if (depth == 0) {
    return this;
  }
  return this.reduce((acc, curr) => {
    if (typeof acc === "number") {
      acc = [acc];
    }
    if (Array.isArray(curr)) {
      acc = acc.concat(curr.customFlat(depth - 1));
    } else {
      acc.push(curr);
    }
    return acc;
  }, []);
};

let customFlatArray = nestedArray.customFlat(5);
console.log("customFlatArray", customFlatArray); // customFlatArray [ 1, 2, 3, 4, 5, 6 ]
