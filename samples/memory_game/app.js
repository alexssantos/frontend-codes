const cardBoard = document.getElementById('cardboard')

const images = ['001.svg', '002.svg', '003.svg', '004.svg', '005.svg', '006.svg'] //, '007.svg', '008.svg'];

let cardHtml = '';

images.forEach(img => {
	cardHtml += `
	<div class="memory-card" data-card="${img}">
		<img class="front-face" src="img2/${img}">
		<img class="back-face" src="img2/default.svg">
	</div>
	`
});

cardBoard.innerHTML = cardHtml + cardHtml;

// fim da Renderização HTML

//const cards = document.getElementsByClassName("memory-card"); //retorna array HtmlElements
const cards = document.querySelectorAll(".memory-card"); 	//retorna array
let choice1, choice2;


function playerMove() {
	this.classList.add('flip')

	if (!choice1) {
		choice1 = this
		console.log("choise 1: ", choice1)
		return
	}
	choice2 = this;
	console.log("choise 2: ", choice2)
}

cards.forEach((card) => {
	card.addEventListener('click', playerMove)
});