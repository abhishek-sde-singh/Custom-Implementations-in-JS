/*
 * Promise.any is a method in javascript that takes an array of promises as an input and returns a single
 * that resolves as soon as any of the promises resolves. It ignores rejected promises unless all the passed promises rejected.
 */

let promise1 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, "hello");
});

let promise2 = Promise.reject("there");

let promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "bye");
});

let promise4 = Promise.reject(42); // lets make it reject and reolve

function customPromiseAny(promises) {
  return new Promise((resolve, reject) => {
    let rejectedPromise = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          resolve(value);
        })
        .catch((err) => {
          rejectedPromise++;
          if (rejectedPromise === promises.length) {
            reject(
              new Error(
                "AggregateError: All promises were rejected in customAny"
              )
            );
          }
        });
    });
  });
}

customPromiseAny([promise1, promise2, promise3, promise4])
  .then((values) => {
    console.log(values);
  })
  .catch((err) => {
    console.log("error", err);
  });
