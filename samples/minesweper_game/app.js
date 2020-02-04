var safeCount, safeMax, mineField, isDead, isWinner, myPoints, minesMap;


function run() {
	setData()
	drawBoard()
}

function setData() {
	lines = 10
	columns = 10
	safeMax = lines * columns;
	isDead = false;
	isWinner = false;
	safeCount = 0;
	myPoints = 0;
	totalMines = Math.round(safeMax * 0.15) //15%
	minesMap = [];

	//-1 ==> bomba	

	mineField = createMineField(columns, lines)
	mineField = setMines(mineField, totalMines)
	mineField = shuffle(mineField)
}

function setMines(_array, maxMines) {
	let xMax = _array[0].length
	let yMax = _array.length

	for (let i = 0; i < maxMines; i++) {
		let line = getValue(yMax)
		let col = getValue(xMax)
		_array[line][col].value = -1
		minesMap.push(`${line}-${col}`);
	}
	return _array
}

function getValue(max) {
	return Math.floor(Math.random() * max)
}

function createMineField(columns, lines) {
	var mineField = [];
	for (let line = 0; line < lines; line++) {
		mineField[line] = [];
		for (let col = 0; col < columns; col++) {
			mineField[line][col] = {
				x: col,
				y: line,
				value: getValue(4)
			}
		}
	}
	console.log(mineField);
	return mineField
}

function drawBoard() {
	// Converte o array em uma tabela e _array insere no DIV #board
	// Note: o parametro onclick, que deixa cada celula "clicavel"
	var board = new Array();

	board.push("<table><tr>");
	for (var line = 0; line < mineField.length; line++) {
		if (line != 0) board.push("</tr><tr>");
		for (var col = 0; col < mineField[line].length; col++) {
			let id = `${line}-${col}`
			board.push(`
				<td
					id="${id}"
					data-coord="${id}"
					onMouseOver="cellHover(this)"
					onMouseOut="cellOut(this)"
					onClick="cellClicked(this)">
					.
				</td>
				`
			);
		}
	}
	board.push("</tr></table>");
	let dashboard = document.getElementsByClassName("dashboard")[0]
	dashboard.innerHTML = board.join("\n");

	// Texto
	let status = document.createElement('p')
	status.setAttribute('id', 'status')
	status.innerHTML = "Total Jogadas: " + safeMax;

	// Pontos
	let pontos = document.createElement('p')
	pontos.setAttribute('id', 'points')
	pontos.innerHTML = "pontos: 0"

	dashboard.appendChild(pontos)
	dashboard.appendChild(status)
}


function cellHover(thisCell) {
	if (!thisCell.className) {
		//thisCell.style.border = "2px solid yellow";
	}
}

function cellOut(thisCell) {
	if (thisCell.className == "clicked") {
		thisCell.style.border = "2px solid #ccc";
	} else {
		//thisCell.style.border = "2px outset gray";
		thisCell.style.border = "none";
		thisCell.style.borderBottom = "2px outset #5198D9";
		//"thin|medium|thick|length|initial|inherit"
		//object.style.borderBottomWidth = "2px"
	}
}

function cellClicked(thisCell) {
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

	this.setClickedCell(thisCell)
	let XY = thisCell.dataset.coord.split("-")
	console.log("Coord", XY)

	let line = parseInt(XY[0])
	let col = parseInt(XY[1])
	let value = mineField[line][col].value
	console.log(value);

	updatePoints(value)
	thisCell.innerText = value;
	showCell(thisCell, value)
	if (isDead) return

	safeCount++;

	if (safeCount == (safeMax - minesMap.length)) { // achou todos os quadrados livres
		isWinner = true;
		setMessage("PARABENS, voce conseguiu!");
	} else {
		setMessage("Beleza! Faltam " + (safeMax - safeCount));
	}
}

function showCell(thisCell, value) {
	switch (value) {
		// Pinta cada numero de uma cor
		case 0:
			thisCell.style.color = "#c00";
			thisCell.innerText = "";
			break;
		case 1: thisCell.style.color = "#070"; break;
		case 2: thisCell.style.color = "#00b"; break;
		case 3: thisCell.style.color = "#c00"; break;
		// Bomba!
		case -1:
			setCellMine(thisCell)
			isDead = true;
			setMessage("MORREU");
			showAllMines();
			break;
	}
}

function setMessage(message) {
	document.getElementById("status").innerHTML = message;
}

function setCellMine(htmlElement) {
	htmlElement.innerHTML = '';
	htmlElement.style.background = "#efc9c9 url('assets/mine-white.svg') no-repeat center";
	htmlElement.style.backgroundSize = "35px 35px";
}

function updatePoints(plus) {
	myPoints = (plus > 0) ? myPoints + plus : 0
	let msgPoints = `pontos: ${myPoints}`
	document.getElementById("points").innerHTML = msgPoints;
}

function shuffle(_array) {
	for (let i = _array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[_array[i], _array[j]] = [_array[j], _array[i]];
	}
	return _array;
}

// No CSS _array classe "clicked" usa outras cores, revelando o numero
function setClickedCell(cell) {
	cell.className = "clicked";
}

function showAllMines() {
	minesMap.map((val, line) => {
		let cell = document.getElementById(val)
		console.log(cell)
		setClickedCell(cell)
		setCellMine(cell)
	})
}

run()