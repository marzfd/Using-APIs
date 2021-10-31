import { paginationSetup } from "./paginationSetup.js"

export function createPaginationBtn(items, wrapper, rows) {

  wrapper.innerHTML = "";

	let page_count = Math.ceil(items.length / rows);

	for (let page = 1; page < page_count + 1; page++) {
		let btn = paginationSetup(page, items);
		wrapper.appendChild(btn);
	}
}
