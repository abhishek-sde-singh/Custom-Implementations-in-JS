setInterval(
  (firstName, lastName) => {
    console.log("hello", firstName, lastName);
  },
  1000,
  "abhishek",
  "singh"
);

console.log("start custom");
function customSetInterval(callback, delay, ...args) {
  let startTime = performance.now();

  function checkTime() {
    const currentTime = performance.now();
    const elapsed = currentTime - startTime;
    if (elapsed >= delay) {
      callback.apply(this, args);
      startTime = performance.now();
    }
    requestAnimationFrame(checkTime);
  }

  const timerId = requestAnimationFrame(checkTime);

  const timerObj = {
    timerId: timerId,
    cancel: () => {
      cancelAnimationFrame(timerId);
    },
  };
  return timerObj;
}

let timer = customSetInterval(
  function (name) {
    console.log("Hello from custom setInterval", name);
  },
  3000,
  "my name is abhishek"
);

timer.cancel(timer.timerId);

console.log("end custom", timer.timerId);

// Order of execution
// start custom
// end custom 1
// Hello from custom setTimeout my name is abhishek
