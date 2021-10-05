function checkDoubleDigits(number) {
  return new Promise((resolve, reject) => {
    if (number >= 10 && number <= 99) {
      resolve('This is a double digit number!');
    } else {
      reject(`Expected a double digit number but got ${number} !`);
    }
  })
  .then(response => console.log(response))
  .catch(error => console.log(error));
}

checkDoubleDigits(3);
checkDoubleDigits(15);
checkDoubleDigits(2021);