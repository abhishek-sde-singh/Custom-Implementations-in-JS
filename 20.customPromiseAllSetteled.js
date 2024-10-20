/*
 * Promise.AllSetteled is a javscript method that takes an array of promises and return a promise that resolves after all the
 * given promises have either resolved or rejected. Unlike Promise.all, which rejects immediately upon any of the input promise
 * rejecting. Promise.allSetteled wait for all the promises to complete, regardless of the outcome resolve or reject.
 */

let promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "hello");
});

let promise2 = Promise.resolve("there");

let promise3 = new Promise((resolve, reject) => {
  setTimeout(reject, 500, "bye");
});

let promise4 = Promise.resolve(42); // lets make it reject and reolve

function customPromiseAllSetteled(promises) {
  return new Promise((resolve, reject) => {
    let result = [];
    let completedPromise = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          result[index] = { status: "fulfilled", value };
          completedPromise++;
        })
        .catch((err) => {
          result[index] = { status: "rejected", err };
          completedPromise++;
        })
        .finally(() => {
          if (completedPromise === promises.length) {
            resolve(result);
          }
        });
    });
  });
}

customPromiseAllSetteled([promise1, promise2, promise3, promise4])
  .then((values) => {
    console.log(values);
  })
  .catch((err) => {
    console.log("error", err);
  });
