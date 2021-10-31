import { contributorInfo } from "./contributorInfo.js";

export function displayPaginated(contributorsList, contributorSection, rows, page) {

  contributorSection = document.querySelector('.contributors-container')

  contributorSection.innerHTML = "";
	page--;

	let start = rows * page;
	let end = start + rows;
	let paginatedItems = contributorsList.slice(start, end);
  console.log(paginatedItems);

  contributorInfo(paginatedItems, contributorSection);
}