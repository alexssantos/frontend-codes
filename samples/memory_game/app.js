startGame()

function startGame() {
	const cardBoard = document.getElementById('cardboard')

	const images = ['001.svg', '002.svg', '003.svg', '004.svg', '005.svg', '006.svg'] //, '007.svg', '008.svg'];
	let ixCards = 0;

	//create 2 times = not repeat ID //repeat image
	cardBoard.innerHTML = createCards() + createCards();

	function createCards() {
		let cardHtml = '';
		images.forEach(img => {
			ixCards++;
			cardHtml += `
					<div class="memory-card" id="card${ixCards}" data-card="${img}">
						<img class="front-face" src="img2/${img}">
						<img class="back-face" src="img2/default.svg">
					</div>
					`
		});
		return cardHtml
	}
}

// ============  fim da Renderização HTML

//const cards = document.getElementsByClassName("memory-card"); //retorna array HtmlElements
const cards = document.querySelectorAll(".memory-card"); 	//retorna array
cards.forEach((card) => {
	let numb = Math.floor(Math.random() * cards.length)
	card.style.order = numb
})

let choice1, choice2;
let lockCards;

cards.forEach((card) => {
	card.addEventListener('click', playerMove)
});

function playerMove() {
	let card = this

	if (lockCards) return;

	card.classList.add('flip')

	if (!choice1) {
		choice1 = card
		console.log("choice 1:", choice1)
		return
	}

	choice2 = card;
	lockCards = true;

	console.log("choice 2:", choice2)

	let iqualsImage = ((choice1.dataset.card == choice2.dataset.card) && (!identityCards()))
		? processHit()
		: processError()
}

function identityCards() {
	return (choice1.id == choice2.id)
}

function processError() {
	setTimeout(() => { alert("Você errou!") }, 300)

	//remove a classe 'flip'
	let seconds = 1
	let _wait = seconds * 1000;

	setTimeout(() => {
		choice1.classList.remove("flip");
		choice2.classList.remove("flip");

		// ! precisa estar dentro do timeout para esse fluxo
		finishMove()
	}, _wait)
}

function processHit() {
	setTimeout(() => { alert("Você acertou!") }, 200)

	//remove click, change background, set disable from element
	disableCard(choice1)
	disableCard(choice2)

	finishMove()
}

function disableCard(card) {
	card.removeEventListener("click", playerMove)
	card.style.background = "#66724b"
	card.disabled = true;
}

function finishMove() {
	[choice1, choice2, lockCards] = [null, null, false]

	finishGame()
}

function finishGame() {
	const cardsCheck = document.querySelectorAll(".memory-card"); 	//retorna array

	let ixDisabled = 0;
	cardsCheck.forEach(card => {
		if (card.disabled) ixDisabled++
	})
	if (ixDisabled < cardsCheck.length) return

	setTimeout(() => {
		let restart = confirm("PARABÉNS, VOCÊ VENCEU! \nGOSTARIA DE REINICIAR?")

		if (restart) {
			lockCards = true
			startGame()
		}
		else {
			const cardBoard = document.getElementById('cardboard')
			cardBoard.innerHTML = "";
		}
	}, 2000)

}