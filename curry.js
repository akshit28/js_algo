function curry(fn) {
    return function curried(...args) {
      console.log(args.length, fn.length)
      if (args.length >= fn.length) {
        return fn.apply(this, args);
      } else {
        return function(...nextArgs) {
          return curried.apply(this, args.concat(nextArgs));
        };
      }
    };
  }
  
  // Usage
  function sum(a, b, c) {
    return a + b + c;
  }
  
  const curriedSum = curry(sum);
  console.log(curriedSum(1)(2)(3)); // 6
  console.log(curriedSum(1, 2)(3)); // 6
  console.log(curriedSum(1)(2, 3)); // 6




// function curry(fn) {
//     return function curried(...args) {
//       if (args.length >= 1 && args[args.length - 1] === '_') {
//         return fn.apply(this, args.slice(0, -1));
//       } else {
//         return function(...nextArgs) {
//           return curried.apply(this, args.concat(nextArgs));
//         };
//       }
//     };
//   }
  
//   // Example usage
//   const sum = (...args) => args.reduce((a, b) => a + b, 0);
  
//   const curriedSum1 = curry(sum);
  
//   console.log(curriedSum1(1)(2)(3)('_'));       // 6
//   console.log(curriedSum1(1, 2)(3, 4)('_'));    // 10
//   console.log(curriedSum1(5)(10)(15, 20)('_')); // 50