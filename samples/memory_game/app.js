let app = { choise1: "", choise2: "", lockCards: false, idCards: 0 }

function startGame() {
	const cardBoard = document.getElementById('cardboard')

	const images = ['001.svg', '002.svg', '003.svg', '004.svg', '005.svg', '006.svg', '007.svg', '008.svg'];
	//create 2 times = not repeat ID //repeat image
	cardBoard.innerHTML = createCards(images) + createCards(images);

	setUpCards()
}

function createCards(images) {
	let cardHtml = '';
	images.forEach(img => {
		app.idCards++;
		cardHtml += `
		<div class="memory-card" id="card${app.idCards}" data-card="${img}">
			<img class="front-face" src="img2/${img}">
			<img class="back-face" src="img2/default.svg">
		</div>
					`
	});
	return cardHtml
}

function setUpCards() {
	const cards = document.querySelectorAll(".memory-card"); 	//retorna array
	cards.forEach((card) => {
		let numb = Math.floor(Math.random() * cards.length)
		card.style.order = numb
	})

	cards.forEach((card) => {
		card.addEventListener('click', playerMove);
	});
}

function playerMove() {
	let card = this
	if (app.lockCards) return;
	card.classList.add('flip')
	if (!app.choice1) {
		app.choice1 = card
		console.log("choice 1:", app.choice1)
		return
	}
	app.choice2 = card;
	app.lockCards = true;
	((app.choice1.dataset.card == app.choice2.dataset.card) && (!identityCards())) ? processHit() : processError()
}

function identityCards() {
	return (app.choice1.id == app.choice2.id)
}

function processError() {
	setTimeout(() => { alert("Você errou!") }, 300)
	let seconds = 1
	let _wait = seconds * 1000;
	setTimeout(() => {
		app.choice1.classList.remove("flip");
		app.choice2.classList.remove("flip");
		finishMove()
	}, _wait)
}

function processHit() {
	setTimeout(() => { alert("Você acertou!") }, 200)
	//remove click, change background, set disable from element
	app.choice1.removeEventListener("click", playerMove)
	app.choice1.style.background = "#66724b"
	app.choice1.disabled = true;

	app.choice2.removeEventListener("click", playerMove)
	app.choice2.style.background = "#66724b"
	app.choice2.disabled = true;

	finishMove()
}

function finishMove() {
	[app.choice1, app.choice2, app.lockCards] = [null, null, false]
	const cardsCheck = document.querySelectorAll(".memory-card"); 	//retorna array
	let disabledCount = 0;
	cardsCheck.forEach(card => {
		if (card.disabled) disabledCount++
	})
	if (disabledCount < cardsCheck.length) return
	else finishGame()
}

function finishGame() {

	setTimeout(() => {
		let restart = confirm("PARABÉNS, VOCÊ VENCEU! \nGOSTARIA DE REINICIAR?")

		if (restart) startGame()
		else {
			const cardBoard = document.getElementById('cardboard')
			cardBoard.innerHTML = "";
		}
	}, 1500)
}

startGame()