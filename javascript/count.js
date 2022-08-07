"use strict";
const list = document.querySelector("[data-collapse]");
const canvas = document.getElementById("bot");
const exit = document.querySelectorAll("[data-dismiss]");
const sun = document.querySelector("[data-toggle-icon]");
const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("[data-search]");
list.addEventListener("click", function (e) {
	if (e.target.dataset !== undefined) {
		canvas.style.display = 'block';
	}
	
	for (let i of exit) {
		i.addEventListener("click", () => {
			canvas.style.display = 'none';
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



// searchinput
document.querySelector('[data-show]').addEventListener('click', function(){
	document.querySelector('.modals').classList.add('show')
	document.querySelector('[data-exit]').addEventListener('click', function(){
		document.querySelector('.modals').classList.remove('show')
	})
})
