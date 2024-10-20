function heavy(x, y) {
  console.log("heavy is called");
  let sum = 0;
  for (let i = 1; i < 100000000; i++) {
    sum += (x + y) * i;
  }
  return sum;
}

// console.log(heavy(2, 3));

function memoize(func) {
  const cache = {};
  return function (...args) {
    let key = JSON.stringify(args);
    if (key in cache) {
      console.log("returned from cache");
      return cache[key];
    } else {
      let result = func.apply(this, args);
      cache[key] = result;
      return cache[key];
    }
  };
}

let result = memoize(heavy);
console.log(result(2, 3));
console.log(result(2, 3));
console.log(result(2, 3));
console.log(result(4, 5));

function memoizeUsingMap(func) {
  const cache = new Map();
  return function (...args) {
    let key = JSON.stringify(args);
    if (cache.has(key)) {
      console.log("returned from cache");
      return cache.get(key);
    } else {
      let result = func.apply(this, args);
      cache.set(key, result);
      return cache[key];
    }
  };
}

// count frequency of elements in array
function countFrequency(arr) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    let key = arr[i];
    if (map.has(key)) {
      map.set(key, map.get(key) + 1);
    } else {
      map.set(key, 1);
    }
  }

  let result = [];
  map.forEach((key, value) => {
    result.push([value, key]);
  });
  return result;
}

let arr = [1, 1, 2, 1, 3, 4, 2, 2, 2, 3];
console.log(countFrequency(arr));
