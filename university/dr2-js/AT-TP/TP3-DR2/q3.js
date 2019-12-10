/*	QUESTAO 3
Crie um componente que possua um botão criar relatório que quando acionado deve imprimir um relatório de resultados da 
disciplina javascript para 20 alunos, no formato de tabela.
	- As notas deverão ser números inteiros entre 0 e 100, criadas aleatoriamente;
	- Cada aluno deve ser representado por um registro composto por nr e nota
	- Use uma função construtora chamada Aluno reveja conceitos aqui ou aqui, se quiser ousar um pouco veja classes;
	- Armazena a nota do aluno como uma variável privada do tipo symbol, use getters e setters para recuperar a informação.
	- Os registros devem ser armazenados em um array;
	- A impressão do relatório deve ter:
		* um título;
		* os resultados mostrados linha a linha no formato "Aluno nr xx - Nota yy [(A/RE)PROVADO]"; e
		* um rodapé com estatística final no formato "APROVADOS: XX (xx%)  |  REPROVADOS: YY (yy%)"
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
	var headerArray = ['NOME', 'NR', 'NOTA', '(A/RE)PROVADO']
	var columnsLength = headerArray.length

	//table
	var table = document.getElementById('q3-table')
	if (!table) {
		var table = CreateHtmlTableWithHeader(headerArray, columnsLength)
		divQ3.appendChild(table)
	}
	else {
		var header = table.firstChild
		table.innerHTML = ''
		table.appendChild(header)
	}

	var success = 0;
	var fail = 0;
	for (let i = 0; i < 20; i++) {
		const nota = this.getRandomIntInclusive(0, 100)
		const name = nomes[i]
		const nr = `NR-${this.getRandomIntInclusive(1000, 9999)}-${this.getRandomIntInclusive(100, 999)}`

		if (nota >= 70) success++
		else fail++

		var alunoRow = new Aluno(name, nota, nr)
		table = AddRowAlunoDataInTable(table, alunoRow)
	}

	setRowClassStatistics(table, success, fail, 20)
});


// ============================================
// FUNCS HTML
// ===========================================

function CreateHtmlTableWithHeader(headerData = [], maxColumns = 1) {

	if (!headerData || maxColumns != headerData.length) return null

	var table = document.createElement('table')
	table.setAttribute('id', 'q3-table')
	table.style.border = '1px solid black';

	//header	
	var tr = document.createElement('tr')
	tr.style.border = '1px solid black';
	for (let i = 0; i < maxColumns; i++) {
		var th = document.createElement('th')
		th.style.border = '1px solid black';
		th.setAttribute('id', `q3-th-${i + 1}`)
		th.appendChild(document.createTextNode(headerData[i]))
		tr.appendChild(th)
	}
	table.appendChild(tr)
	return table
}

function AddRowAlunoDataInTable(tableElement, aluno) {
	// pattern: NOME | NR | NOTA | (A/RE)PROVADO
	if (!aluno) return tableElement

	var tr = document.createElement('tr')
	tr.style.border = '1px solid black'

	tr = setRowData(tr, aluno.nome)
	tr = setRowData(tr, aluno.nr)
	tr = setRowData(tr, aluno.nota)
	tr = setRowData(tr, aluno.getResultado())

	tableElement.appendChild(tr)

	return tableElement
}

function setRowData(trParrent, data, attrPairStr = []) {
	var td = document.createElement('td')
	td.style.border = '1px solid black'
	td.appendChild(document.createTextNode(data))

	for (let i = 0; i < attrPairStr.length; i++) {
		td.setAttribute(attrPairStr[i][0], attrPairStr[i][1])
	}

	trParrent.appendChild(td)
	return trParrent
}

function setRowClassStatistics(table, success, fail, total) {
	var tr = document.createElement('tr')
	tr.style.border = '1px solid black'

	var aproPercent = (success / total) * 100
	var apr = `APROVADOS: ${success} (${aproPercent}%)`
	tr = setRowData(tr, apr, [["colspan", "2"]])

	var reproPercent = (fail / total) * 100
	var rep = `REPROVADOS: ${fail} (${reproPercent}%)`
	tr = setRowData(tr, rep, [["colspan", "2"]])

	table.appendChild(tr)
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

/*
TABLE SAMPLE

<table style="width:100%">
  <tr>	//ROW
    <th>Firstname</th>	//HEADER
    <th>Lastname</th>
    <th>Age</th>
  </tr>
  <tr>	//ROW
    <td>Jill</td>		//DATA
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
</table>
*/