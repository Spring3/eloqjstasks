var size = 16;
for (var i = 0; i < size; i ++) {
  var line = '';
  for (var j = 0; j < size; j ++) {
    if (i % 2 === 0) {
      line += j % 2 === 0 ? ' ' : '#';
    } else {
      line += j % 2 === 0 ? '#' : ' ';
    }
  }
  console.log(line);
}