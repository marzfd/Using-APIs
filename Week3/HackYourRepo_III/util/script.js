import { fetchRepo } from "./fetchRepo.js";

export function main() {

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