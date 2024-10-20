/*
 * Throtteling in Javascript is a technique to ensure that a function is called at most once in a specified period
 * of time, regardless of how many times it is triggered. This is particularly useful for managing execution rates
 * for functions that are called repeatedly, such as those attached to events like scrolling, resizing, or mouse movement.
 */

/*
 * In a first-person shooter game, consider the firing mechanism of a machine gun:
 * Say fireBullets are throttled. No matter how rapidly the player clicks, the gun will only fire once every 100ms.
 * This prevents the player from firing faster than the game's designed rate, ensuring balanced gameplay.
 */

function getData() {
  console.log("I am getting throtteled");
}

function improve(func, delay) {
  let inThrottel;
  return function () {
    if (!inThrottel) {
      func();
      inThrottel = true;
      setTimeout(() => {
        inThrottel = false;
      }, delay);
    }
  };
}

const throttel = improve(getData, 2000);
