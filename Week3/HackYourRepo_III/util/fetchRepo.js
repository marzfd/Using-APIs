import { repoInfo } from './repoInfo.js';

const url = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';

export function fetchRepo(select, repoInfoSection, contributorSection) {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      data.forEach(item => {
        const option = document.createElement('option');
        option.value = item.name;
        option.textContent = item.name;
        select.appendChild(option);
      })

      repoInfo(data, select, repoInfoSection, contributorSection);
    })
    .catch(error => {
      console.log(error);
      const errorEl = document.createElement('h3');
      errorEl.setAttribute('style', 'background-color: coral; color: white; display: block; text-align: center;');
      errorEl.textContent = `Error ! ${error.message}`;
      document.body.appendChild(errorEl);
    });
};