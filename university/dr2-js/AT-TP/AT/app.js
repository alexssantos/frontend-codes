const cardboard = document.getElementById('cardboard');
const images = ['001.svg', '002.svg', '003.svg', '004.svg', '005.svg', '006.svg', '007.svg', '008.svg',]

let cardHtml = '';

images.map(img => {
	cardHtml += `
		<div>
			<img src="img/${img}">
			<img src="img/default.svg">
		</div>
	`
});

cardboard.innerHTML = cardHtml;