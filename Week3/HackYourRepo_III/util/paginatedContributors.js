import { displayPaginated } from "./displayPaginated.js";
import { paginationSetup } from "./paginationSetup.js";
import { createPaginationBtn } from "./createPaginationBtn.js";


export function paginatedContributors(data, contributorSection) {

  const dataArray = new Array(data);
  const contributorsList = dataArray[0];

  let current_page = 1;
  const rows = 5;

  displayPaginated(contributorsList, contributorSection, rows, current_page);

  const pagination = document.querySelector('.pagination');
  createPaginationBtn(contributorsList, pagination, rows);

  paginationSetup(current_page, contributorsList, contributorSection, rows);
}