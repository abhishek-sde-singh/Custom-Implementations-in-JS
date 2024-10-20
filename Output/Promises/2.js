console.log("starting");
let x = new Promise(function executor(resolve, reject) {
  console.log("inside executor");
  setTimeout(function timeout() {
    console.log("inside setTimeout");
    let res = Math.random();
    if (res > 0.5) {
      resolve(res);
    } else {
      reject(res);
    }
  }, 5000);
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

/*
 * when single x.then
 */
// starting
// inside executor
// Promise { <pending> }
// ending
// inside setTimeout
// promise is Promise { 0.5977690754491982 }
// inside onfullfillment 0.5977690754491982

/*
 *  when two x.then
 */
// starting
// inside executor
// Promise { <pending> }
// ending
// inside setTimeout
// promise is Promise { 0.708019844415642 }
// inside onfullfillment 0.708019844415642
// promise is Promise { 0.708019844415642 }
// inside onfullfillment2 0.708019844415642
