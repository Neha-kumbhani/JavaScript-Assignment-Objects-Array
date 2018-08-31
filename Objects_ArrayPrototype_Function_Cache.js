
// Constructor function for Person objects
var cache = function(complexFunction){
  let cachedResults = {};
  return function(...theArgs){
    console.log('cached results so far', cachedResults)
    let argsString = theArgs.toString()
    console.log('args string', argsString)
    if(!cachedResults[argsString]){
      console.log('caching results')
      cachedResults[argsString] = complexFunction(...theArgs)
    }
    return cachedResults[argsString]
  }
}

var sum = (x,y) => {
  return x+y;
}
var sumCache = cache(sum)
console.log(sumCache(2,3)) //cached results so far {}, args string 2,3,caching results 5,cached results so far {2,3: 5}
console.log(sumCache(4,5)) //args string 4,5 caching results 9
console.log(sumCache(2,3)) //cached results so far {2,3: 5, 4,5: 9} args string 2,3 -> 5  
console.log(JSON.stringify(undefined)) //undefined