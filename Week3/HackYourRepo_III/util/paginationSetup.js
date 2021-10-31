import { displayPaginated } from './displayPaginated.js';

export function paginationSetup(page, contributorsList, contributorSection, rows) {

  let button = document.createElement('button');
	button.innerText = page;

  let current_page = 1;

	if (current_page == page) button.classList.add('active');

	button.addEventListener('click', () => {
		current_page = 	button.innerText;

    displayPaginated(contributorsList, contributorSection, rows, current_page);

		let current_btn = document.querySelector('button.active');
		current_btn.classList.remove('active');

		button.classList.add('active');
	});

	return button;
}