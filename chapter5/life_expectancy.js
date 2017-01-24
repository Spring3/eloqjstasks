const ancestry = JSON.parse(require('./dataset'));

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

const data = {};

ancestry.map((person) => {
  return { 
    century: Math.ceil(person.died / 100),
    age: person.died - person.born
  };
}).forEach((person) => {
  if (!data[person.century]) {
    data[person.century] = [person.age]
  } else {
    data[person.century].push(person.age);
  }
});

Object.keys(data).forEach((key) => {
  data[key] = average(data[key]);
});

console.log(data);