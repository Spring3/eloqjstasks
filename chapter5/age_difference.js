const ancestry = JSON.parse(require('./dataset.js'));
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

const byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

const ages = [];
ancestry.forEach((person) => {
  if (byName[person.mother]) {
    ages.push(person.born - byName[person.mother].born);
  }
});

console.log(average(ages));