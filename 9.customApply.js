/*
 * The apply method in JavaScript is a fundamental aspect of function invocation,
 * providing a means to call a function with the given this value and arguments provided as an array.
 */

Function.prototype.customApply = function (context, args) {
  context = context || window;

  if (!Array.isArray(args)) {
    throw new Error("CreateListFromArrayLike called on non-object");
  }

  let id = Symbol();
  context[id] = this;
  const result = context[id](...args);
  delete context[id];
  return result;
};

let obj = {
  name: "Abhishek",
  fn: "singh",
};

function greet(message, city) {
  console.log(`${this.name} ${message} ${city}`);
}

console.log(obj.fn); // singh
greet.customApply(obj, ["hello there", "noida"]); // Abhishek hello there noida
// greet.customApply(obj, "hello", "world"); // TypeError: CreateListFromArrayLike called on non-object

console.log(obj.fn); // undefined lost as we made a dummy property of same name
// * after using symbols the above one will log `singh`
let x = 10;
// x.call(obj, "hey i am ", "from your code"); // TypeError: x.call is not a function
