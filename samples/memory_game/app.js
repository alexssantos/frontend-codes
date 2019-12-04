const cardBoard = document.getElementById('cardboard')

const images = [
	'001.svg', '002.svg', '003.svg', '004.svg', '005.svg', '006.svg'
];

let cardHtml = '';

images.forEach(img => {
	cardHtml += `
	<div class="memory-card">
		<img class="front-face" src="img/${img}">
		<img class="back-face" src="img/010.svg">
	</div>
	`
});

cardBoard.innerHTML = cardHtml + cardHtml;

// fim da Renderização HTML

//const cards = document.getElementsByClassName("memory-card"); //retorna array HtmlElements
const cards = document.querySelectorAll(".memory-card"); 	//retorna array

function flipCard() {
	this.classList.add('flip')
}

cards.forEach((card) => {
	card.addEventListener('click', flipCard)
});