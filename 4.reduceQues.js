let arr = [
  { obj: 10 },
  { obj: 10 },
  { obj: 20 },
  { obj: undefined },
  { obj: null },
  { obj: 30 },
];

let ans = arr.reduce((acc, curr) => {
  if (acc?.obj) {
    acc = acc.obj;
  }
  if (curr.obj) {
    return acc + curr.obj;
  }
  return acc;
});
console.log(ans);

let arr2 = [
  { a: 10 },
  { b: 10 },
  { c: 20 },
  { d: undefined },
  { e: null },
  { obj: 30 },
];

let res = arr2.reduce((acc, curr) => {
  for (let key in acc) {
    acc = acc[key];
  }
  for (let key in curr) {
    if (curr[key] !== undefined && curr[key] !== null) {
      acc += curr[key];
    }
  }
  return acc;
}, 10);

console.log(res);
