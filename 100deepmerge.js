const obj1 = { a: 1, b: { c: 3, d: 4 } };
const obj2 = { b: { c: 30, e: 50 }, f: 60 };
const mergedObj = deepMerge(obj1, obj2);
console.log(mergedObj); // Output: { a: 1, b: { c: 30, d: 4, e: 50 }, f: 60 }

const arr1 = [1, [2, 3], 4];
const arr2 = [[5], 6];
const mergedArr = deepMerge(arr1, arr2);
console.log(mergedArr); // Output: [1, [2, 3, 5], 4, 6]
