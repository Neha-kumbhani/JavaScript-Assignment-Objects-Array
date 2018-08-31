function add(n){
  var fn = function(x) {
    return add(n + x);
  };
  
  fn.valueOf = function() {
    return n;
  };
  
  return fn;
}
console.log(add(1));
console.log(add(1)(2));
console.log(add(1)(2)(3)); // 6
console.log(add(1)(2)(3)(4)); // 10
console.log(add(1)(2)(3)(4)(5)); // 15