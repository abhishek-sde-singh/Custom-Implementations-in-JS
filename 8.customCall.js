/*
 *Function/method borrowing - It is a technique in JavaScript where you borrow a method from one
 * object and use it on another.
 * Function borrowing in javascript can be achieved in several ways, primarily using the call, apply and bind methods.
 */

/*
 * The call function in javascript is a method that can be used on any function to invoke it.
 * The primary purpose of call is to set the value of `this` within the scope of the function
 * beign invoked and to pass arguments to the function in a controlled manner.
 */

const person = {
  name: "Abhishek",
  sayName: function () {
    console.log(`my name is ${this.name}`);
  },
};

const person2 = {
  name: "Abhi",
};

let hello = person.sayName;
hello(); // my name is undefined
hello.call(person); // my name is Abhishek

person.sayName.call(person2); // my name is Abhi

// * Custom call function

Function.prototype.customCall = function (context, ...args) {
  context = context || window;
  if (typeof this !== "function") {
    throw new Error(THIS + "is not a function");
  }

  //   context.fn = this;
  //   let result = context.fn(...args);
  //   delete context.fn;

  let id = Symbol("id");
  context[id] = this;
  let result = context[id](...args);
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
greet.customCall(obj, "hello there", "noida"); // Abhishek hello there noida
console.log(obj.fn); // undefined lost as we made a dummy property of same name
// * after using symbols the above one will log `singh`
