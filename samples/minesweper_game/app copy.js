var safeCount, safeMax, mineField, isDead, isWinner;

function init() {
	resetData();
	drawBoard();
	setMessage("Evite as bombas!");
}

function resetData() {
	isDead = false;
	isWinner = false;
	safeMax = 12;
	safeCount = 0;
	mineField = [
		[1,  2, -1,  1],
		[2, -1,  3,  1],
		[2, -1,  3,  1],
		[1,  1,  2, -1] // -1 == bomba
	];
}

function setMessage(text) {
	document.getElementById("statusline").innerHTML = text;
}

function drawBoard() {
	// Converte o array em uma tabela e a insere no DIV #board
	// Note o parametro onclick, que deixa cada celula "clicavel"
	var board = new Array();  

	board.push("<table><tr>");
	for (var i = 0; i < mineField.length; i++) {
		if (i != 0) board.push("</tr><tr>");
		for (var j = 0; j < mineField[i].length; j++) {
			board.push(`
				<td
				    onMouseOver="cellHover(this)"
				    onMouseOut="cellOut(this)"
				    onClick="cellClicked(this)">
						mineField[i][j] 
				</td>
				`
			);
		}
	}
	board.push("</tr></table>"); 
	document.getElementById("board").innerHTML = board.join("\n");
}

function cellClicked(thisCell) {
	// Detecta se algo importante aconteceu
	if (isDead) {
		init();
		setMessage("Vamos tentar de novo");
		return;
	} else if (isWinner) {
		init();
		setMessage("Vai ganhar de novo?");
		return;
	}
	
	// Se esse quadrado ja foi clicado, ignora
	if (thisCell.className == "clicked") return;

	// No CSS a classe "clicked" usa outras cores, revelando o numero
	thisCell.className = "clicked";

	switch (thisCell.innerHTML) {
		// Pinta cada numero de uma cor
		case "1": thisCell.style.color = "#070"; break;
		case "2": thisCell.style.color = "#00b"; break;
		case "3": thisCell.style.color = "#c00"; break;
		// Bomba!
		case "-1":
			thisCell.innerHTML = '*';
			isDead = true;
			setMessage("MORREU");
			return;
	}
	safeCount++;

	if (safeCount == safeMax) { // achou todos os quadrados livres
		isWinner = true;
		setMessage("PARABENS, voce conseguiu!");
	} else {
		setMessage("Beleza! Faltam " + (safeMax-safeCount));
	}
}
// Podia ter usado :hover, mas a ideia eh estressar o javascript
// Soh faz o highlight nos quadrados virgens
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

// window.onload = init;

