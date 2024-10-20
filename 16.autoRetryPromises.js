// * Implement auto-retry promises

function ureliableFunction() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("success");
    } else {
      reject("rejected");
    }
  });
}

function autoRetryPromise(promiseFunc, maxAttempts, delay) {
  return new Promise((resolve, reject) => {
    let attempts = 0;

    const retry = () => {
      promiseFunc()
        .then(resolve)
        .catch((error) => {
          attempts++;
          console.log("attempt number is", attempts);
          if (attempts < maxAttempts) {
            setTimeout(retry, delay);
          } else {
            reject(`finally failed after ${attemts} retries ${error}`);
          }
        });
    };

    retry();
  });
}

autoRetryPromise(ureliableFunction, 3, 1000)
  .then((result) => {
    console.log("result", result);
  })
  .catch((error) => {
    console.log("error", error);
  });
