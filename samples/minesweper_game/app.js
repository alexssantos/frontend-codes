var safeCount, safeMax, mineField, isDead, isWinner;

function run() {
	setData()
	drawBoard()
}

function setData() {
	isDead = false;
	isWinner = false;
	safeMax = 12;
	safeCount = 0;
	mineField = [
		[1, 2, -1, 1],
		[2, -1, 3, 1],
		[2, -1, 3, 1],
		[1, 1, 2, -1] // -1 == bomba
	];

	mineField = shuffle(mineField)
}

function drawBoard() {
	// Converte o array em uma tabela e _array insere no DIV #board
	// Note: o parametro onclick, que deixa cada celula "clicavel"
	var board = new Array();

	board.push("<table><tr>");
	for (var line = 0; line < mineField.length; line++) {
		if (line != 0) board.push("</tr><tr>");
		for (var col = 0; col < mineField[line].length; col++) {
			board.push(`
				<td
					id="cell"
					onMouseOver="cellHover(this)"
					onMouseOut="cellOut(this)"
					onClick="cellClicked(this)">
						${mineField[line][col]}
				</td>
				`
			);
		}
	}
	board.push("</tr></table>");
	let dashboard = document.getElementsByClassName("dashboard")[0]
	dashboard.innerHTML = board.join("\n");

	let status = document.createElement('p')
	status.setAttribute('id', 'status')
	dashboard.appendChild(status)
}

function cellHover(thisCell) {
	if (!thisCell.className) {
		thisCell.style.border = "2px solid yellow";
	}
}

function cellOut(thisCell) {
	if (thisCell.className == "clicked") {
		thisCell.style.border = "2px solid #ccc";
	} else {
		thisCell.style.border = "2px outset gray";
	}
}

function cellClicked(thisCell) {
	console.log(thisCell)

	// Detecta se algo importante aconteceu
	if (isDead) {
		setTimeout(() => {
			run();
		}, 1000);

		setMessage("Vamos tentar de novo!");
		return;
	} else if (isWinner) {
		run();
		setMessage("Vai ganhar de novo?");
		return;
	}

	// Se esse quadrado ja foi clicado, ignora
	if (thisCell.className == "clicked") return;

	// No CSS _array classe "clicked" usa outras cores, revelando o numero
	thisCell.className = "clicked";

	switch (thisCell.innerText) {
		// Pinta cada numero de uma cor
		case "1": thisCell.style.color = "#070"; break;
		case "2": thisCell.style.color = "#00b"; break;
		case "3": thisCell.style.color = "#c00"; break;
		// Bomba!
		case "-1":
			thisCell.innerHTML = '*';
			thisCell.style.background = "#c00";
			isDead = true;
			setMessage("MORREU");
			return;
	}
	safeCount++;

	if (safeCount == safeMax) { // achou todos os quadrados livres
		isWinner = true;
		setMessage("PARABENS, voce conseguiu!");
	} else {
		setMessage("Beleza! Faltam " + (safeMax - safeCount));
	}
}

function setMessage(message) {
	document.getElementById("status").innerHTML = message;
}

function shuffle(_array) {
	for (let i = _array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[_array[i], _array[j]] = [_array[j], _array[i]];
	}
	return _array;
}

function openAll() {
	document.getElementById("cell").innerHTML = message;
}

run()