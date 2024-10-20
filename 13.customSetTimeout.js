console.log("start");
setTimeout(() => {
  console.log("Hello");
}, 3000); // Hello

setTimeout(
  (name) => {
    console.log(`Hello ${name}`);
  },
  4000,
  "Abhishek"
); // Hello Abhishek
console.log("end");

// order of execution
// start
// Hello
// Hello Abhishek
// end

/*
 * requestAnimationFrame is a browser API that allows you to schedule a function to be executed before the next repaint.
 * It is commonly used for creating smooth animations and handling tasks that need to run at specific frame rates
 * (about 60 frames per second in most browsers).
 */

/*
 * performance.now() is a high-resolution timestamp method provided by the browser's performance API.
 * It returns the current time in milliseconds, with a much higher precision (sub-millisecond accuracy)
 * compared to the Date.now() method.
 */

/*
 * cancelAnimationFrame() method is part of the window interface in the browser and is used to cancel a previously
 * scheduled animation frame request that was created with requestAnimationFrame(). When you call requestAnimationFrame(),
 * it returns a unique identifier. You can pass this identifier to cancelAnimationFrame() to stop the execution of the
 * callback associated with that request.
 */

console.log("start custom");
function customSetTimeout(callback, delay, ...args) {
  const startTime = performance.now();

  function checkTime() {
    const currentTime = performance.now();
    const elapsed = currentTime - startTime;
    if (elapsed >= delay) {
      callback.apply(this, args);
    } else {
      requestAnimationFrame(checkTime);
    }
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

let timer = customSetTimeout(
  function (name) {
    console.log("Hello from custom setTimeout", name);
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
