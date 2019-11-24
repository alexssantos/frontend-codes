function onBtnClicked() {
	console.log("Executando 1o Passo");
	let qtd = parseInt(document.getElementById('qtd').value),
		min = parseInt(document.getElementById('min').value),
		max = parseInt(document.getElementById('max').value);

	let numeros = {};
	let i = 0;
	while (i < qtd) {
		let n = Math.round((Math.random() * (max - min)) + min);

		if (numeros[n])
			continue; // se o número já existir como propriedade do objeto seguimos adiante sem incrementar o i
		numeros[n] = true;
		i++;
	}
	console.log(numeros); 
	
	document.getElementById('resposta').innerHTML = JSON.stringify(Object.keys(numeros));

}

