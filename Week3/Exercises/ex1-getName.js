// ! Exercise A
// function getData(url) {
//   fetch(url)
//     .then(response => response.json)
//     .then(json => console.log(json))
//     .catch(error => console.log(error));
// }

// getData('https://randomfox.ca/floof/');


// TODO async/await + try/catch
async function getData() {
    try {
    const fetchedData = await fetch('https://randomfox.ca/floof/');
    const parsedData = await fetchedData.json();
    console.log(parsedData);
    }
    catch (err) {
      console.log('Oops, something went wrong!', err);
    }
  }

getData();


// ! Exercise B
// const arrayOfWords = ['cucumber', 'tomatoes', 'avocado'];

// const makeAllCaps = array => {
//   return new Promise((resolve, reject) => {
//     let capsArray = array.map(word => {
//       if (typeof word === 'string') {
//         return word.toUpperCase();
//       } else {
//         reject('Error: Not all items in the array are strings!');
//       }
//     });
//     resolve(capsArray);
//   });
// };

// makeAllCaps(arrayOfWords)
//   .then(result => console.log(result))
//   .catch(error => console.log(error));


// TODO async/await + try/catch
const arrayOfWords = ['cucumber', 'tomatoes', 'avocado'];

async function makeAllCaps(array) {
  try {
    let capsArray = await array.map(word => {
      if (typeof word === 'string') {
        return word.toUpperCase();
      } else {
        throw 'Error: Not all items in the array are strings!';
      }
    })
    console.log(capsArray);
  }
  catch(err) {
    console.log('Oops, something went wrong!', err);
  }
}

makeAllCaps(arrayOfWords)