/*
 * Promise.all is a method in javascript that takes an array of promises as an input and returns a single
 * promise that resolves when all the promises in the array have resolved or when the array  is empty.
 * Promise.all() will reject immediately upon any of the input promises rejecting.
 */

let promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "hello");
});

let promise2 = Promise.resolve("there");

let promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "bye");
});

let promise4 = Promise.resolve(42); // lets make it reject and reolve

function customPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    let result = [];
    let completedPromise = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          result[index] = value;
          completedPromise++;
          if (completedPromise === promises.length) {
            resolve(result);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });

    if (promises.length === 0) {
      resolve(result);
    }
  });
}

customPromiseAll([promise1, promise2, promise3, promise4])
  .then((values) => {
    console.log(values); // [ 'hello', 'bye', 'bye', 42 ]
  })
  .catch((err) => {
    console.log("error", err); // error 42
  });
