function every (array, predicate) {
  let result = true;
  array.forEach((item) => {
    if (!predicate(item)) {
      result = false;
      return;
    }
  });
  return result;
}

function some (array, predicate) {
  let result = false;
  array.forEach((item) => {
    if (predicate(item)) {
      result = true;
    }
  });
  return result;
}

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false