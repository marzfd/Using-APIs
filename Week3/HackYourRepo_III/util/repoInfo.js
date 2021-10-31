import { fetchContributor } from './fetchContributor.js';

export function repoInfo(data, select, repoInfoSection, contributorSection) {
  select.addEventListener('change', () => {
    contributorSection.innerHTML = '';
    repoInfoSection.innerHTML = '';
    data.forEach(item => {
      if (item.name == select.value) {
        repoInfoSection.innerHTML =
            `
            <table>
              <tbody>
                <tr>
                  <td>Repository:</td>
                  <td>${item.name}</td>
                </tr>
                <tr>
                  <td>Description:</td>
                  <td>${item.description}</td>
                </tr>
                <tr>
                  <td>Forks:</td>
                  <td>${item.forks}</td>
                </tr>
                <tr>
                  <td>Updated:</td>
                  <td>${(item.updated_at).replace(/[ tz]/gi, ' ').replace(/[-]/gi, '/')}</td>
                </tr>
              </tbody>
            </table>
            `;

        repoInfoSection.style.display = 'block';

        const url = item.contributors_url;
        fetchContributor(url, contributorSection);
      }
    })
  })
};