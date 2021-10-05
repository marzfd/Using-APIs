// const getAnonName = (firstName, callback) => {
//   setTimeout(() => {
//     if (!firstName) {
//       callback(new Error("You didn't pass in a first name!"));
//       return;
//     }

//     const fullName = `${firstName} Doe`;

//     callback(fullName);
//   }, 1000);
// };

// getAnonName('John', console.log);


// ! Rewrite this function, replace the callback syntax with the Promise syntax:
const getAnonName = (firstName) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (firstName) {
        resolve(`${firstName} Doe`)
      } else {
        reject("You didn't pass in a first name!")
      }
    }, 1000)
  });
}

getAnonName('John').then(console.log);
