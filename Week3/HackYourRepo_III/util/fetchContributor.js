import { contributorInfo } from "./contributorInfo.js";
import { paginatedContributors } from "./paginatedContributors.js";

export function fetchContributor(url, contributorSection, rootDiv) {
  fetch(url)
    .then(response => response.json())
    .then(data => {

        if (data.length <= 5) {
          contributorInfo(data, contributorSection);
          const pagination = document.querySelector('.pagination');
          pagination.innerHTML = '';
        }
        else {
          paginatedContributors(data, contributorSection, rootDiv);
        }

    })
    .catch(function (error) {
      console.log(error);
      const errorEl = document.createElement('h4');
      errorEl.setAttribute('style', 'text-align: center; background-color: coral; color: white; display: block; padding = 10px');
      errorEl.textContent = `Error ! ${error.message}`;
      const footer = document.querySelector('footer')
      footer.appendChild(errorEl);
    });
}