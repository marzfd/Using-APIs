// TODO: for module 'moment' in pokerDiceRoller => command 'npm install moment' (in console)

// The line below makes the rollDice() function available to this file.
const rollDice = require('./pokerDiceRoller');

function rollTheDices() {
  const results = [];
  
  // using a Promise chain to include five dice
  return rollDice(1)
    .then((value) => {
      results.push(value);
      return rollDice(2);
    })
    .then((value) => {
      results.push(value);
      return rollDice(3);
    })
    .then((value) => {
      results.push(value);
      return rollDice(4);
    })
    .then((value) => {
      results.push(value);
      return rollDice(5);
    })
    .then((value) => {
      results.push(value);
      return results;
    });
}

rollTheDices()
  .then((results) => console.log('Resolved!', results))
  .catch((error) => console.log('Rejected!', error.message));
