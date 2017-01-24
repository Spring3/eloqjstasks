for(let i = 0; i < 100; i ++) {
  const divOnThree = i % 3 === 0;
  const divOnFive = i % 5 === 0;
  if (divOnThree && divOnFive) {
    console.log('FizzBuzz')
  }else if (divOnThree) {
    console.log('Fizz');
  } else if (divOnFive) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}