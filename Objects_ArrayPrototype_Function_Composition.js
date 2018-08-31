var f1 = function (x) { return [1, x]; };
var f2 = function (x) { return [2, x]; };
var f3 = function (x) { return [3, x]; };

function compose(...fns) {
  return function composition(arg) {
    return fns.reduceRight((acc, next) => {
      return next(acc);
    }, arg);
  };
} 
console.log(compose(f1,f2,f3)(4));
console.log(compose(compose(f1,f2),f3)(4));
console.log(compose(f1,compose(f2,f3))(4));