// Your code here.

const month = function() {
  String.prototype.capitalize = function() {
      return this.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
  };
  const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
  const name = function(number) {
    if (number < 0 || number > 11)
      throw new Error('Wrong parameter');
    return months[number].capitalize();
  }

  const number = function(name) {
    for(let i = 0; i < months.length; i++){
      if (months[i] === name.toLowerCase()) {
        return i;
      }
    }
  }

  return { name, number};
}();

console.log(month.name(2));
// → March
console.log(month.number("November"));
// → 10