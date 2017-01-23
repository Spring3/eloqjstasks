function reverseArray(array) {
  const result = [];
  for(let i = 0; i < array.length; i ++) {
    result.push(array[array.length - 1 - i]);
  }
  return result;
}

function reverseArrayInPlace(array) {
  const length = array.length;
  for(let i = 0; i < length / 2; i ++) {
    let buffer = array[i];
    array[i] = array[length - 1 - i];
    array[length - 1 - i] = buffer;
  }
  return array;
};

console.log(reverseArray(['A', 'B', 'C']));
console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);