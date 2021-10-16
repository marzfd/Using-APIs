'use strict';
/* ------------------------------------------------------------------------------
1. Complete the function `requestData()` using `fetch()` to make a request to 
  the url passed to it as an argument. The function should return a promise. 
  Make sure that the promise is rejected in case of HTTP or network errors.
2. Notice that the function `main()` calls `requestData()`, passing it the url 
  `https://xkcd.now.sh/?comic=latest`. Try and run the code in the browser and 
  open the browser's console to inspect the data returned from the request.
3. Next, complete the function `renderImage()` to render an image as an `<img>` 
  element appended to the document's body, using the data returned from the API.
4. Complete the function `renderError()` to render any errors as an `<h1>` 
  element appended to the document's body.
5. Refactor the `main()` function to use `async/await`.
6. Test error handling, for instance, by temporarily changing the `.sh` in the 
  url with `.shx`. There is no server at the modified url, therefore this 
  should result in a network (DNS) error.
------------------------------------------------------------------------------ */
const url = 'https://xkcd.now.sh/?comic=latest';
document.body.style.background = '#00808095';
document.body.style.textAlign = 'center';
document.body.style.marginTop = '10%';
document.body.style.fontFamily = 'cursive';


function requestData(url) {
  // TODO return a promise using `fetch()`
  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log('Data', data);
      return data;
    })
    .catch(error => {
      console.log('err', error);
    });
}

function renderImage(data) {
  // TODO render the image to the DOM
  const img = document.createElement('img');
  img.src = data.img;
  document.body.appendChild(img);
}

function renderError(error) {
  // TODO render the error to the DOM
  const h1 = document.createElement('h1');
  h1.innerHTML =`Oops, something went wrong! "${error.message}"`;
  h1.style.fontSize = '30px'
  h1.style.color = 'red'
  document.body.appendChild(h1);
}

// TODO refactor with async/await and try/catch
async function main() {
  try {
    const fetchedData = await fetch(url);
    const parsedData = await fetchedData.json();
    renderImage(parsedData);
  }
  catch (error) {
    renderError(error)
  } 
}

window.addEventListener('load', main);