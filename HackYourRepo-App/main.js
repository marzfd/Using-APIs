"use strict";

function main() {

  const placeholderRepos = [
    {
      name: 'SampleRepo1',
      description: 'This repository is meant to be a sample',
      forks: 5,
      updated: '2020-05-27 12:00:00',
    },
    {
      name: 'AndAnotherOne',
      description: 'Another sample repo! Can you believe it?',
      forks: 9,
      updated: '2020-05-27 12:00:00',
    },
    {
      name: 'HYF-Is-The-Best',
      description:
        "This repository contains all things HackYourFuture. That's because HYF is amazing!!!!",
      forks: 130,
      updated: '2020-05-27 12:00:00',
    },
  ];

  // info section
  const card = document.getElementById('card');

  function showInfo() {

    const select = document.getElementById('select'); 

    const repName = document.getElementById('name');
    const desc = document.getElementById('desc');
    const fork = document.getElementById('fork');
    const update = document.getElementById('update');

    for (let i = 0; i < select.clientHeight; i++) {

      if (select.value == placeholderRepos[i].name) {
  
        card.style.display = 'flex';
  
        repName.innerText = placeholderRepos[i].name;
        desc.innerText = placeholderRepos[i].description;
        fork.innerText = placeholderRepos[i].forks;
        update.innerText = placeholderRepos[i].updated;
      }
    }
  }
 
  select.addEventListener('click', showInfo)

}

main();