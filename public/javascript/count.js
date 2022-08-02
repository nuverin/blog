"use strict";
const list = document.querySelector("[data-collapse]");
const canvas = document.getElementById("bot");
const exit = document.querySelectorAll("[data-dismiss]");
const sun = document.querySelector("[data-toggle-icon]");
const search = document.querySelector("#search");
const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("[data-search]");
list.addEventListener("click", function (e) {
	if (e.target.dataset) {
		canvas.classList.add("active");
	}
	for (let i of exit) {
		i.addEventListener("click", () => {
			canvas.classList.remove("active");
		});
	}
});
// window.onclick = (e) => {
// 	const ejs = e.target.dataset;
// 	if (ejs !== null && ejs === list) {
// 		canvas.classList.add("active");
// 	}
// };
// remove hidden and active block 
if(localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage))){
	document.getElementById('moon').classList.remove('hidden')
} else {
	document.getElementById('sun').classList.remove('hidden')
}
sun.addEventListener('click', function() {
	// toggle icons inside button
	document.getElementById('sun').classList.toggle('hidden')
	document.getElementById('moon').classList.toggle('hidden')
	let html = document.querySelector('html');
	html.classList.toggle('dark')
	
})

search.addEventListener("click", () => {
	document.querySelector("[data-show]").style.opacity = "100%";
	for (let i of exit) {
		i.addEventListener("click", () => {
			document.querySelector("[data-show]").style.opacity = "0";
		});
	}
});
const cardBlog = document.querySelector("[data-aria]");
const blog = document.querySelectorAll(".blog");
const Name = document.querySelectorAll("[data-h1]");

const List = () => {
	const dataValue = searchInput.value.toUpperCase();
	for (var i = 0; i < Name.length; i++) {
		let data = blog[i].textContent || blog[i].innerHTML;
		if (blog[i].querySelectorAll("[data-h1]")) {
			if (data.toUpperCase().includes(dataValue)) {
				blog[i].style.display = "";
			} else {
				blog[i].style.display = "none";
			}
		}
	}
};

// pagination
