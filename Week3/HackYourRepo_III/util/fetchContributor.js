export function fetchContributor(url, contributorSection) {
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