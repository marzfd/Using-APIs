'use strict';
// /*------------------------------------------------------------------------------
// Complete the four functions provided in the starter `index.js` file:

// `fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
//   syntax in order to get the data from the public API. Errors (HTTP or network 
//   errors) should be logged to the console.

// `fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
//   public API and populate the `<select>` element in the DOM.
  
// `fetchImage`: Use `fetchData()` to fetch the selected image and update the 
//   `<img>` element in the DOM.

// `main`: The `main` function orchestrates the other functions. The `main` 
//   function should be executed when the window has finished loading.

// Use async/await and try/catch to handle promises.

// Try and avoid using global variables. As much as possible, try and use function 
// parameters and return values to pass data back and forth.
// ------------------------------------------------------------------------------*/
const url = 'https://pokeapi.co/api/v2/pokemon/';

document.body.setAttribute('style', 'background: #305080; text-align: center; margin-top: 5%; font-family: cursive');

async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function fetchAndPopulatePokemon(url, select) {
  try {
    const data = await fetchData(url);
    data.results.forEach(item => {
      const listItem = document.createElement('option');
      listItem.textContent = item.name;
      select.appendChild(listItem);
    });
  }
  catch (error) {
    console.log(error.message)
  }
};

async function fetchImage(url, img) {
  try {
    const data = await fetchData(url);
    img.src = data.sprites.front_default;
  }
  catch(error) {
    console.log(error.message)
  }
};


function main() {

  // Create Elements
  const h1 = document.createElement('h1');
  h1.innerText = 'Fetch Pokemon Images';
  h1.style.color = '#f5ebd7';
  document.body.appendChild(h1);

  const btn = document.createElement('button');
  btn.textContent = 'Get Pokemon !';
  btn.setAttribute('style', 'background-color: yellow; font-family: cursive; font-size: 25px; width: 225px; height: 70px; padding: 15px; margin: 15px; border-radius: 25px; border: none; display: inline-block');
  document.body.appendChild(btn);

  const select = document.createElement('select');
  const option = document.createElement('option');
  select.setAttribute('style', 'background-color: yellow; font-family: cursive; font-size: 25px; width: 225px; height: 70px; padding: 15px; margin: 15px; border-radius: 25px; outline: none; text-align: center;');
  option.innerText = 'Pokemon Name';
  document.body.appendChild(select);
  select.appendChild(option);

  const div = document.createElement('div');
  const img = document.createElement('img');
  img.setAttribute('style', 'margin-top: 100px; width:250px');
  div.appendChild(img);
  document.body.appendChild(div)

  const footer = document.createElement('footer');
  footer.textContent = '©2021 Created By Marzieh!';
  footer.style.marginTop = '10%';
  document.body.appendChild(footer);


  btn.addEventListener('click', () => {

    fetchAndPopulatePokemon(url, select);

    select.addEventListener('change', () => {
      fetchImage(url+select.value, img);
    });
  });

}

window.addEventListener('load', main);