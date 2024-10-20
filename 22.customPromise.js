class CustomPromise {
  constructor(executor) {
    this.state = "pending";
    this.value = undefined;
    this.onFulfillmentArray = [];
    this.onRejectionArray = [];

    const resolve = (value) => {
      if (this.state === "pending") {
        this.state = "fulfilled";
        this.value = value;
        queueMicrotask(() => {
          this.onFulfillmentArray.forEach((callback) => callback(this.value));
        });
      }
    };

    const reject = (value) => {
      if (this.state === "pending") {
        this.state = "rejected";
        this.value = value;
        queueMicrotask(() => {
          this.onRejectionArray.forEach((callback) => callback(this.value));
        });
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfill, onReject) {
    return new CustomPromise((resolve, reject) => {
      const handleFulfill = (value) => {
        if (typeof onFulfill === "function") {
          try {
            resolve(onFulfill(value));
          } catch (error) {
            reject(error);
          }
        } else {
          resolve(value);
        }
      };

      const handleReject = (reason) => {
        if (typeof onReject === "function") {
          try {
            resolve(onReject(reason));
          } catch (error) {
            reject(error);
          }
        } else {
          reject(reason);
        }
      };

      if (this.state === "pending") {
        this.onFulfillmentArray.push(handleFulfill);
        this.onRejectionArray.push(handleReject);
      } else if (this.state === "fulfilled") {
        queueMicrotask(() => handleFulfill(this.value));
      } else {
        queueMicrotask(() => handleReject(this.value));
      }
    });
  }

  catch(onReject) {
    return this.then(null, onReject);
  }
}

console.log("starting");
let x = new CustomPromise(function executor(resolve, reject) {
  console.log("inside executor");
  let res = setTimeout(function timeout() {
    console.log("inside setTimeout");
  }, 5000);
  if (res % 2 == 0) {
    resolve(res);
  } else {
    reject(res);
  }
});

console.log(x);

// onfullfillment [fn,fn2]
// onRejection [fn,fn2,]
x.then(
  function onfullfillment(val) {
    console.log("promise is", x);
    console.log("inside onfullfillment", val);
  },
  function onRejection(val) {
    console.log("promise is", x);
    console.log("inside on rejection", val);
  }
);

x.then(
  function onfullfillment2(val) {
    console.log("promise is", x);
    console.log("inside onfullfillment2", val);
  },
  function onRejection2(val) {
    console.log("promise is", x);
    console.log("inside on rejection2", val);
  }
);

console.log("ending");

// starting
// inside executor
// Promise {<fulfilled>: 4}
// ending
// promise is Promise {<fulfilled>: 4}
// inside onfullfillment 4
// promise is Promise {<fulfilled>: 4}
// inside onfullfillment2 4
