function cancellablePromise(executor) {
  let cancel;
  const promise = new Promise((resolve, reject) => {
    cancel = () => {
      reject(new Error("Promise cancelled"));
    };
    executor(resolve, reject);
  });
  return { promise, cancel };
}

const { promise, cancel } = cancellablePromise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved successfully!");
  }, 2000);
});

setTimeout(() => {
  cancel();
}, 1000);

promise
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
