const nestedObject = {
  a: 1,
  b: { c: 2, d: { e: 3, f: { g: 4 } } },
};

console.log(Object.entries(nestedObject)); // [ [ 'a', 1 ], [ 'b', { c: 2, d: [Object] } ] ]

for (let [key, value] of Object.entries(nestedObject)) {
  console.log(key, value);
}

//  a 1
// b { c: 2, d: { e: 3, f: { g: 4 } } }

/*
when flatten fully
  a: 1,
  "b.c": 2,
  "b.d.e": 3,
  "b.d.f.g": 4,
*/

/*
when flatten partially
  a: 1,
  "b.c": 2,
  "b.d.e": 3,
  "b.d.f": {
    g: 4,
  },
*/

function flatNestedObjects(nestedObject, depth = 1, prefix = "") {
  if (depth < 1) {
    return nestedObject;
  }
  return Object.entries(nestedObject).reduce((acc, [key, value]) => {
    const newPrefix = prefix ? `${prefix}.${key}` : `${key}`;

    if (typeof value === "object" && value !== null && depth > 1) {
      Object.assign(acc, flatNestedObjects(value, depth - 1, newPrefix));
    } else {
      acc[newPrefix] = value;
    }
    return acc;
  }, {});
}

const flatObject = flatNestedObjects(nestedObject, 3);
console.log("i am flat object", flatObject);
