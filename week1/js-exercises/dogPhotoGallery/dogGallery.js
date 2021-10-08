function main() {

  const xrhBtn = document.getElementById('xhr');
  const axiosBtn = document.getElementById('axios');
  const ulEl = document.getElementById('list');

  // API
  const url = `https://dog.ceo/api/breeds/image/random`;

  // ! XMLHttpRequest
  function requestWithXHR() {

    // 1. Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // 2. Configure it: GET-request for the URL 
    xhr.open('GET', url, true);

    // 3. Send the request over the network
    xhr.send();

    // 4. This will be called after the response is received
    xhr.onload = function() {
      if (xhr.status != 200) {
        // analyze HTTP status of the response
        console.log(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
      } else {
        // show the result
        const response = JSON.parse(xhr.responseText);
        // response is the server
        console.log(`Done! with XHR you got: ${response.message}`);

        //Render the img property into an <img> tag in the DOM
        const liEl = document.createElement('li');
        const imgEl = document.createElement('img');
        imgEl.src = `${response.message}`;
        liEl.appendChild(imgEl);
        ulEl.appendChild(liEl);
      }
    };

    xhr.onprogress = function(event) {
      if (event.lengthComputable) {
        console.log(`Received ${event.loaded} of ${event.total} bytes`);
      } else {
        console.log(`Received ${event.loaded} bytes`); // no Content-Length
      }
    };

    xhr.onerror = function() {
      console.log('Request failed');
    };
  }
  

  // ! Axios
  function requestWithAxios() {
    
    axios.get(url)

      .then(response => {
        // Handle Success
        console.log(`Done! with Axios you got: ${response.data.message}`);

        //Render the img property into an <img> tag in the DOM
        const liEl = document.createElement('li');
        const imgEl = document.createElement('img');
        imgEl.src = `${response.data.message}`;
        liEl.appendChild(imgEl);
        ulEl.appendChild(liEl);              
      })
      // Handle Error
      .catch(error => console.log(error));
  }

  xrhBtn.addEventListener('click', requestWithXHR);
  axiosBtn.addEventListener('click', requestWithAxios);
}

main();