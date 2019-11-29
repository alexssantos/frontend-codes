/*	QUESTAO 3



*/

const nomes = ['Damian Rutledge', 'Samia Patel', 'Danny Davidson', 'Bhavik Macleod',
	'Campbell Smyth', 'Charli Ratcliffe', 'Kalem Ryder', 'Cain Robbins', 'Merlin Stone',
	'Kelsea Walsh', 'Alishia Huynh', 'Alessandra Briggs', 'Noel Goulding', 'Emelia Davis',
	'Mitchel Findlay', 'Jasper Porter', 'Habibah Stubbs', 'Calvin Bean', 'Ansh Morin', 'Ho Bender'
]

// ===================
// DRAW ELEMENTS
// ===================
var divQ3 = document.getElementById('q3');

divQ3.appendChild(document.createTextNode("Questao 3"))
divQ3.appendChild(document.createElement("br"))

var q3Btn = document.createElement("button")
q3Btn.appendChild(document.createTextNode("Gerar Relatorio"))
divQ3.appendChild(q3Btn)


// tvz tire
var resElement = document.createElement("p")
resElement.setAttribute("id", "resposta3")
divQ3.appendChild(resElement)

class Aluno {
	constructor(nome, nota, nr) {
		this.nome = nome;
		this.nota = nota;
		this.nr = nr;
	}

	getRegistro() {
		return `${this.nome} nr ${this.nr} - Nota ${this.nota}`
	}

	getResultado() {
		if (this.nota > 70) return 'APROVADO'
		else return 'REPROVADO'
	}
}

//var aluno = new Aluno('Alex', 20, "nr");


// CALCULAR - CLICK EVENT
q3Btn.addEventListener("click", () => {

	for (let i = 0; i < 20; i++) {
		const nota = this.getRandomIntInclusive(0, 100)
		const name = nomes[i]
		const nr = `NR-${this.getRandomIntInclusive(1000, 9999)}-${this.getRandomIntInclusive(100, 999)}`

		var aluno = new Aluno(name, nota, nr)
		console.log(aluno)
		console.log('NR: ' + nr)

		// tabela 
		// NOME | NR | NOTA | (A/RE)PROVADO
		// Aluno nr xx - Nota yy [(A/RE)PROVADO]";
	}

});


// ============================================
// FUNCS HTML
// ===========================================

function funcCreateInputElement(idElement, required = false, type = "text", label = "", value = "") {
	var labelElement = document.createElement("label")
	labelElement.appendChild(document.createTextNode(label))

	var inputElement = document.createElement("input")
	//inputElement.setAttribute("id", idElement);
	inputElement.id = idElement
	inputElement.required = required
	inputElement.type = type
	inputElement.name = value

	labelElement.appendChild(inputElement)

	return labelElement;
}

function addSpanToParent(parentElement, spanId) {
	var span = document.createElement("span")
	span.setAttribute("id", spanId)
	parentElement.appendChild(span)
}

function validateNumberField(number, spanId) {
	var span = document.getElementById(spanId)
	if (!number) {
		span.setAttribute("class", "error")
		span.innerHTML = "Please, set a number."
	}
	else span.innerHTML = "";
}

// ============================================
// PURE FUNCS
// ===========================================

function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	deltaInclusive = (max - min + 1)
	return Math.floor(Math.random() * deltaInclusive) + min;
}