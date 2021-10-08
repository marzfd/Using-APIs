function main() {

  const url = `https://xkcd.now.sh/?comic=latest`;

  // ! XMLHttpRequest
  function requestWithXHR(url) {

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
        console.log(`Done! with XHR you got: ${response.img}`);

        //Render the img property into an <img> tag in the DOM
        const imgEl = document.getElementById('xhrImage');
        imgEl.src = `${response.img}`;

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
    
    axios.get(url)
    
      .then(response => {
        
        console.log(`Done! with Axios you got: ${response.data.img}`);

        //Render the img property into an <img> tag in the DOM
        const imgEl = document.getElementById('axiosImage');
        imgEl.src = `${response.data.img}`;
      
      })
      
      .catch(error => console.log(error));
  }

  requestWithXHR(url);
  requestWithAxios(url);
}

main();