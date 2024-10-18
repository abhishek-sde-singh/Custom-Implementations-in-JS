/*
 * The bind method does not immediately invoke the function. Instead, it returns a new function
 * that, when called, has its this context permanently set to the specified value.
 */

Function.prototype.customBind = function (context, ...args) {
  context = context || window;
  if (typeof this !== "function") {
    throw new Error(this + "is not a function");
  }

  let id = Symbol();
  context[id] = this;

  return function (...newArgs) {
    const result = context[id](...args.concat(newArgs));
    delete context[id];
    return result;
  };
};

let obj = {
  name: "Abhishek",
  fn: "singh",
};

function greet(message, city) {
  console.log(`${this.name} ${message} ${city}`);
}

console.log(obj.fn); // singh
let newBind = greet.customBind(obj, "hello there", "noida");
newBind(); // Abhishek hello there noida

// * after using symbols the above one will log `singh`
let x = 10;
// x.call(obj, "hey i am ", "from your code"); // TypeError: x.call is not a function

Function.prototype.customBind2 = function (context, ...args) {
  return (...newArgs) => this.apply(context, [...args, ...newArgs]);
};

let newBind2 = greet.customBind2(obj, "hello there bind 2");
newBind2("noida"); // Abhishek hello there bind 2 noida
