"use strict";

const canvas = document.getElementById("bot");
const sun = document.getElementById('toggles');
const listmenu = document.getElementById('list');
const navmenu = document.getElementById('nav-menu')
listmenu.addEventListener('click', function(){
	listmenu.classList.toggle('list-active');
	navmenu.classList.toggle('hidden')
})
// remove hidden and active block 


// filter search


if(localStorage.getItem('theme-color') === 'dark' || (!('theme-color' in localStorage)) && window.matchMedia('(prefers-color-scheme: dark)').matches){
		document.getElementById('moon').classList.remove('hidden')
		document.documentElement.classList.add('dark');
} else {	
		document.getElementById('sun').classList.remove('hidden')
		document.documentElement.classList.remove('dark');
}
sun.addEventListener('click', function(){
	// toggle icons for unlock block;
	document.getElementById('moon').classList.toggle('hidden');
	document.getElementById('sun').classList.toggle('hidden');
	if(localStorage.getItem('theme-color')){
		if(localStorage.getItem('theme-color') === 'light'){
			document.documentElement.classList.toggle('dark')
			localStorage.setItem('theme-color', 'dark');
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme-color', 'light')
		}

	} else {
		if(document.documentElement.classList.contains('dark')){
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme-color', 'light')
		} else {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme-color', 'dark')
		}
	}
	
})
const blogAnimation = document.querySelectorAll('blog')


	// toggle icons inside butto