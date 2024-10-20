let x = new Promise(function exector(resolve, reject) {
  console.log("inside executor");
  setTimeout(function timeout() {
    console.log("inside settimeout");
    resolve("sucesss");
  }, 1000);
  console.log("leaving executor");
});
console.log(x);
x.then((val) => {
  console.log(val);
});

// inside executor
// leaving executor
// Promise { <pending> }
// inside settimeout
// sucesss
