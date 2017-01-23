function range(start, end, step = 1) {
  const result = [];
  if (start < end) {
    for(let i = start; i <= end; i += step) {
      result.push(i);
    }
  } else {
    for(let i = start; i >= end; i += step) {
      result.push(i);
    }
  }
  return result;
}

function sum(array) {
  return array.reduce((sum, current) => {
    return sum += current;
  });
}

console.log(range(1,10));
console.log(sum(range(1,10)));

console.log(range(1, 10, 2));
console.log(range(5, 2, -1));