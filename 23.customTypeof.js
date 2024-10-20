console.log(Object.prototype.toString.call(123)); // [object Number]
console.log(Object.prototype.toString.call([])); // [object Array]
console.log(Object.prototype.toString.call({}).slice(8, -1).toLowerCase()); // object

function customTypeof(value) {
  const type = Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
  if (type === "number") {
    return "number";
  }
  if (type === "array") {
    return "array";
  }
  if (type === "object") {
    return "object";
  }
  if (type === "null") {
    return "null";
  }
  if (type === "undefined") {
    return "undefined";
  }
  if (type === "map") {
    return "map";
  }
  if (type === "function") {
    return "function";
  }
}

console.log(customTypeof(null));
