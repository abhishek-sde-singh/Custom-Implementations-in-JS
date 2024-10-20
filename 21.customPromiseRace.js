/*
 * Promise.race is a ethod in javascript that takes an array of Promises as an input and return a single promise that
 * resolves or reject as soon as one of the promises in the array resolves or reject, with either  the value or the reason
 * from that promise. This means Promise.Race essentially "races" the promise against each other and settles as soon as the
 * first one settles, wheather it resolves or reject.
 */

let promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 400, "hello");
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 300, "hello promise 2");
});

let promise3 = new Promise((resolve, reject) => {
  setTimeout(reject, 200, "bye");
});

// let promise4 = Promise.resolve(42); // lets make it reject and reolve

function customPromiseRace(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      Promise.resolve(promise)
        .then((value) => {
          resolve(value);
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}

customPromiseRace([promise1, promise2, promise3])
  .then((values) => {
    console.log(values);
  })
  .catch((err) => {
    console.log("error", err);
  });
