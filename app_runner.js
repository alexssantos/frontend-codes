
class Aluno {
	constructor(nome, nota, nr) {
		this.nome = Symbol(nome);
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

	getNome() {
		return this.nome
	}
	setNome(nome) {
		this.nome = nome
	}
}

const aluno = new Aluno('Alex', 20, "NR-10");

var nome1 = aluno.getNome()
var nome2 = aluno.getNome()

console.log(nome1 == nome2)
aluno.setNome("Gabriel")
var nome3 = aluno.getNome()
console.log(nome3 == nome2)