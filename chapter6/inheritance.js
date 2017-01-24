// Awesome task. My favourite so far!!!
// Interface
function Interface(sequence) {
  this.index = -1;
  this.sequence = sequence;
}

Interface.prototype.next = function () {
  if (this.index < this.sequence.length){
    return this.sequence[++this.index];
  }
}

Interface.prototype.hasNext = function () {
  return this.index + 1 < this.sequence.length;
}

Object.defineProperty(Interface.prototype, 'position', {
  get: function () { return this.index }
});


function logFive (sequence) {
  let vlaue = null;
  do {
    value = sequence.next();
    if (sequence.position < 5) {
      console.log(value);
    }
  }
  while(sequence.hasNext());
}

// Interface Extender
function ArraySeq(array) {
  Interface.call(this, array);
}

ArraySeq.prototype = Object.create(Interface.prototype);

// Inreface Extender
function RangeSeq(from, to) {
  const array = [];
  for(let i = from; i < to; i ++) {
    array.push(i);
  }
  Interface.call(this, array);
}

RangeSeq.prototype = Object.create(Interface.prototype);


logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104
