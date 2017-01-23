function deepEqualHack(obj1, obj2){
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

function deepEqual(obj1, obj2) {
  if (typeof obj1 === typeof obj2 && Object.keys(obj1).length === Object.keys(obj2).length){
    for(let key in obj1) {
      // check for null and typeof
      if (!obj1[key] || !obj2[key] || typeof obj1[key] !== typeof obj2[key]){
        return false;
      }
      // if both objects, check them recursively
      if (typeof obj1[key] === 'object'){
        if (!deepEqual(obj1[key], obj2[key])){
          return false;
        }
      }
    }
    return true;
  }
  return false;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true