// TODO: for module 'moment' in pokerDiceRoller => command 'npm install moment' (in console)

// The line below makes the rollDice() function available to this file.
const rollDice = require('./pokerDiceRoller');

function rollTheDices() {

  const dices = [1, 2, 3, 4, 5];
  //  create an array of promises for use with Promise.all()
  return Promise.all(dices.map(dice => rollDice(dice)));

}

rollTheDices()
  .then(results => console.log('Resolved!', results))
  .catch(error => console.log('Rejected!', error.message));