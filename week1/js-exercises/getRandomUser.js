function main() {

  const url = `https://www.randomuser.me/api`;

  // ! XMLHttpRequest
  function requestWithXHR(url) {

    // 1. Create a new XMLHttpRequest object
    const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
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
        console.log(`Done! with XHR you got: ${response.results[0].gender}, ${response.results[0].name.title} ${response.results[0].name.first} ${response.results[0].name.last}, from ${response.results[0].location.country}.`);
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
  function requestWithAxios(url) {
    const axios = require('axios').default;
    axios.get(url)
    
      .then(response => console.log(`Done! with Axios you got: ${response.data.results[0].gender}, ${response.data.results[0].name.title} ${response.data.results[0].name.first} ${response.data.results[0].name.last}, from ${response.data.results[0].location.country}.`))

      .catch(error => console.log(error));
  }

  requestWithXHR(url);
  requestWithAxios(url);

}

main();