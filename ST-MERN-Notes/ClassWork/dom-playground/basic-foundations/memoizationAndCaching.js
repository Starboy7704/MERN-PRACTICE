// Helper that takes ANY function fn and returns a "cached" version
function memoize(fn) {
  // cache object: input -> output
  var cache = {};

  function memoizedFunction(arg) {
    // If we have seen this input before, return cached result
    if (cache[arg] !== undefined) {
      console.log("From cache");
      return cache[arg];
    }

    // If not, compute result and store it
    console.log("Computing");
    var result = fn(arg);
    cache[arg] = result;
    return result;
  }

  return memoizedFunction;
}

// A fake "slow" function
function slowSquare(n) {
  // Simulate heavy work
  for (var i = 0; i < 1000000; i++) {
    // do nothing
  }
  return n * n;
}

// Wrap it with memoize
var fastSquare = memoize(slowSquare);

console.log(fastSquare(5)); // "Computing" then 25
console.log(fastSquare(5)); // "From cache" then 25
console.log(fastSquare(6)); // "Computing" then 36
console.log(fastSquare(6)); // "From cache" then 36
