"use strict";

const url = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';

function fetchRepo(select, repoInfoSection, contributorSection) {
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

function fetchContributor(url, contributorSection) {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      data.forEach(item => {
        const contItem = document.createElement('div');
        const profileImg = document.createElement('img');
        const profileName = document.createElement('h3');
        profileName.style.marginLeft = '1rem';
        const numberOfContribution = document.createElement('h3');

        numberOfContribution.setAttribute('style', 'margin-left: auto; background: #D5D5D5; color: #212121; padding: 0.1rem 0.8rem; border-radius: 5px;')

        contItem.appendChild(profileImg);
        contItem.appendChild(profileName);
        contItem.appendChild(numberOfContribution);

        contributorSection.appendChild(contItem);

        profileImg.src = item.avatar_url;
        profileImg.style.width = '70px';
        profileImg.style.borderRadius = '20px';
        profileName.textContent = item.login;
        numberOfContribution.textContent = item.contributions;
        contItem.classList.add('items');

        contributorSection.style.display = 'block';
      })

    })
    .catch(function (error) {
      const errorEl = document.createElement('h3');
      errorEl.setAttribute('style', 'background-color: coral; color: white; display: block; padding = 10px');
      errorEl.textContent = `network request failed ! "${error.message}"`;
      document.body.appendChild(errorEl);
    });
}

function showInfo(data, select, repoInfoSection, contributorSection) {
  select.addEventListener('change', () => {
    contributorSection.innerHTML = '';
    repoInfoSection.innerHTML = '';
    data.forEach(item => {
      if (item.name == select.value) {
        repoInfoSection.innerHTML = ` 
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


function main() {

  const rootDiv = document.createElement('div');
  rootDiv.id = 'root';
  document.body.appendChild(rootDiv);

  const header = document.createElement('header');
  rootDiv.appendChild(header);

  const p = document.createElement('p');
  p.innerText = 'HackYourFuture Repositories';
  header.appendChild(p);

  const select = document.createElement('select');
  select.id = 'select';
  select.className = 'selectMenu';
  select.innerText = 'a'
  header.appendChild(select);

  const option = document.createElement('option');
  option.textContent = 'Choose a Repository ...';
  option.hidden = true;
  select.appendChild(option);

  const main = document.createElement('main');
  rootDiv.appendChild(main);

  const repoInfoSection = document.createElement('section');
  repoInfoSection.className = 'repo-container';
  main.appendChild(repoInfoSection);

  const contributorSection = document.createElement('section');
  contributorSection.className = 'contributors-container';
  main.appendChild(contributorSection);

  const footer = document.createElement('footer');
  footer.textContent = '©2021 Created By Marzieh!';
  footer.style.textAlign = 'center';
  rootDiv.appendChild(footer);

  fetchRepo(select, repoInfoSection, contributorSection);

}

window.onload = main;