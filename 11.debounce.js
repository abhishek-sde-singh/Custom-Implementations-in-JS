/*
 * Debouncing in javascript is a technique to ensure that a function is not called too frequently,
 * potentially causing performance issues. It is particularly useful in situations like Search Input or Autocomplete.
 * It can also be understood as a programming practice used to ensure that time-consuimg tasks do not fire so often, which can be
 * inefficient or annoying for the user. Essentially it limits the rate at which a function can fire. A debounced
 * function will delay the execution of the function until a certain amount of time has passed since the last time
 * the debounce function was invoked.
 */

/*
 * In a strategy game, consider a function that saves the game state when the player makes changes:
 * Say saveGameState is debounced. If the player makes multiple changes in quick succession, the game will wait
 * until 2 seconds after the last change before actually saving. This prevents unnecessary, frequent saves that could
 * impact game performance.
 */

function getData() {
  console.log("Getting data");
}

function improve(func, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, arguments);
    }, delay);
  };
}

const debounce = improve(getData, 1000);
