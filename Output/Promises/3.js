console.log("starting");
let x = new Promise(function executor(resolve, reject) {
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
