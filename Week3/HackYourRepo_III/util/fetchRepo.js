import { showInfo } from './showInfo.js';

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

      showInfo(data, select, repoInfoSection, contributorSection);
    })
    .catch(error => {
      const errorEl = document.createElement('h3');
      errorEl.setAttribute('style', 'background-color: orange; coral: red; display: block; padding = 10px');
      errorEl.textContent = `network request failed ! "${error.message}"`;
      document.body.appendChild(errorEl);
    });
};