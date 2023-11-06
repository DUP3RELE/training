functions = [x => x + 1, x => x * x, x => 2 * x], x = 4

// var compose = function(functions) {
//   function composeHelper(f, g) {
//   return (x) => f(g(x));
// }
//  let composedFunction = functions[functions.length - 1];
// for (let i = functions.length - 2; i >= 0; i--) {
//   composedFunction = composeHelper(functions[i], composedFunction);
// }

// return composedFunction;
// }

var compose = function(functions) {
  return x => functions.reduceRight((acc,f)=>f(acc),x)
};

 console.log(function);