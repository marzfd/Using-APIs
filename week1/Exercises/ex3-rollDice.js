function rollDice() {
  return new Promise((resolve, reject) => {

    // Compute a random number of rolls (3-10) that the dice MUST complete
    const randomRollsToDo = Math.floor(Math.random() * 8) + 3;
    console.log(`Dice scheduled for ${randomRollsToDo} rolls...`);
  
    const rollOnce = (roll) => {
      // Compute a random dice value for the current roll
      const value = Math.floor(Math.random() * 6) + 1;
      console.log(`Dice value is now: ${value}`);
  
      // Use callback to notify that the dice rolled off the table after 6 rolls
      if (roll > 6) {
        reject(new Error('Oops... Dice rolled off the table.'));
      }
  
      // Use callback to communicate the final dice value once finished rolling
      if (roll === randomRollsToDo) {
        resolve(value);
      }
  
      // Schedule the next roll todo until no more rolls to do
      if (roll < randomRollsToDo) {
        setTimeout(() => rollOnce(roll + 1), 500);
      }
    };
  
    // Start the initial roll
    rollOnce(1);
  })
}

rollDice()
  .then(value => console.log(`Success! Dice settled on ${value}.`))
  .catch(error => console.log(error.message));