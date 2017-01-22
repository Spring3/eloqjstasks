function countBs(str) {
  let amount = 0;
  if (!str) return amount;
  for(let i = 0; i < str.length; i ++) {
    if (str.charAt(i) === 'B') {
      amount ++;
    }
  }
  return amount;
}

function countChar(str, char) {
  let amount = 0;
  if (!str || !char) return amount;
  for(let i = 0; i < str.length; i ++) {
    if (str.charAt(i) === char) {
      amount ++;
    }
  }
  return amount;
}

console.log(countBs('BBC'));
console.log(countChar('kakkerlak', 'k'));