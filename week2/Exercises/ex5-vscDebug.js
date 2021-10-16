'use strict';
/*------------------------------------------------------------------------------
Use the VSCode Debugger to fix the bugs
--------------------------------------------------------------- --------------*/
// TODO: for node-fetch module: npm install node-fetch (in console)

const fetch = require('node-fetch');
// import fetch from 'node-fetch';

async function getData(url) {
  const response = await fetch(url);
  return response.json();
}

function renderLaureate({ knownName, birth, death }) {
  console.log(`\nName: ${knownName.en}`);
  console.log(`Birth: ${birth.date}, ${birth.place.locationString}`);
  if (death) {
    console.log(`Death: ${death.date}, ${death.place.locationString}`);
  }
}

function renderLaureates(laureates) {
  // console.log('laureates:', laureates);a
  laureates.forEach(renderLaureate);
}

async function fetchAndRender() {
  try {
    const { laureates } = getData(
      'http://api.nobelprize.org/2.0/laureates?birthCountry=Netherlands&format=json&csvLang=en'
    );
    renderLaureates(laureates);
  } catch (err) {
    console.error(`Something went wrong: ${err.message}`);
    // console.log(err.stack);
  }
}

fetchAndRender(); 