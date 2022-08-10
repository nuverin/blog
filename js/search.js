'use strict'

const input = document.getElementById('searchInput');
const HeaderInput = document.getElementById('cardbs');
const storeCard = HeaderInput.querySelectorAll('.blog');
input.addEventListener('keyup', function(){
	var key = input.value.toUpperCase();
	for(var i = 0; i < storeCard.length; i++){
		var GetJudul = storeCard[i].querySelector('[data-h1]');
		var GetDesc = storeCard[i].querySelector('[data-description]')
		var GetItem = GetJudul.textContent || GetJudul.innerHTML;
		var GetItem1 = GetDesc.textContent || GetDesc.innerHTML;
		if(GetItem.toUpperCase().includes(key)){
			storeCard[i].style.display = ''
		}else if(GetItem1.toUpperCase().includes(key)){
			storeCard[i].style.display = ''
		} else {
			storeCard[i].style.display = 'none'
		}
	}
});


// searchinput
