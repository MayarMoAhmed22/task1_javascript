function createCounter(init) {
  let current = init;
  return {
    increment: function () {
      current++;
      return current;
    },
    decrement: function () {
      current--;
      return current;
    },
    reset: function () {
      current = init;
      return current;
    },
  };
}

let result = createCounter(5);

console.log(result.increment());
console.log(result.reset());
console.log(result.decrement());
