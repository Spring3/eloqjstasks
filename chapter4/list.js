function arrayToList(array) {
  if (array.length === 0) {
    return null;
  } else {
    return {
      value: array.shift(),
      rest: arrayToList(array)
    }
  }
}

function listToArray(list) {
  const result = [];
  do {
    result.push(list.value);
    list = list.rest;
  } while(list);
  return result;
}

function prepend(item, list) {
  const elem = {
    value: item,
    rest: list
  };
  return elem;
}

function nth(list, index) {
  let i = 0;
  if (index === 0) {
    return list.value;
  }

  while(list.rest) {
    if (i === index) 
      return list.value;
    list = list.rest;
    i++;
  }
  return undefined;
}

console.log(arrayToList([10, 20]));
console.log(JSON.stringify(arrayToList([10, 20, 30, 40])));
console.log(listToArray(arrayToList([10, 20, 30, 40])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));