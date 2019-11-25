/* questao 4
- 3 caixas de texto que só aceitam números e tenha os rótulos (label) Quantidade de números, valor mínimo e valor máximo
- um botão calcular que quando acionado deve criar um array com quantidade de números aleatórios não repetidos e ordená-los
- Os números devem estar entre valor mínimo e valor máximo (inclusives, ou seja incluindo o valor mínimo e valor máximo)

*/


var divQ4 = document.getElementById('q4');

divQ4.appendChild(document.createTextNode("Questao 4"))
divQ4.appendChild(document.createElement("br"))

var labelQtd = funcCreateInputElement("q4QtdId", true, "number", "Quantidade :")
addSpanToParent(labelQtd, "q4SpanQtd")
divQ4.appendChild(labelQtd)

var labelValMin = funcCreateInputElement("q4ValMinId", true, "number", "valor minimo :")
addSpanToParent(labelValMin, "q4SpanMin")
divQ4.appendChild(labelValMin)

var labelValMax = funcCreateInputElement("q4ValMaxId", true, "number", "valor maximo :")
addSpanToParent(labelValMax, "q4SpanMax")
divQ4.appendChild(labelValMax)

var btnQ4 = document.createElement("button")

btnQ4.appendChild(document.createTextNode("Calcular"))
btnQ4.setAttribute("id", "q4Btn")
divQ4.appendChild(btnQ4)

var resElement = document.createElement("p")
resElement.setAttribute("id", "q4Resposta")
divQ4.appendChild(resElement)



// CALCULAR - CLICK EVENT
btnQ4.addEventListener("click", () => {
	let min = document.getElementById("q4ValMinId"),
        max = document.getElementById("q4ValMaxId"),
        qtd = document.getElementById("q4QtdId"),
		res = document.getElementById("q4Resposta")

    validateNumberField(qtd.value, "q4SpanQtd")    
	validateNumberField(min.value, "q4SpanMin")
	validateNumberField(max.value, "q4SpanMax")

    var qtdVal = parseInt(qtd.value)
	var minVal = parseInt(min.value)
	var maxVal = parseInt(max.value)

	if ((maxVal-minVal) < qtdVal) {
		res.setAttribute("class", "error")
		res.textContent = "Erro: diferença entre Maximo e minimo maior que quantidade."
		return;
	}
	else res.textContent = ""

	var numeros = generateRandomNumbers(qtdVal, minVal, maxVal)
	res.textContent = "resposta: " + JSON.stringify(numeros)
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


// =====================
// PURE FUNCS
// =====================

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    deltaInclusive = (max - min + 1)
    return Math.floor(Math.random() * deltaInclusive) + min;
}

function generateRandomNumbers(qtd, min, max) {
	console.log(`Executando função pura com argumentos min: ${min}, max: ${max} e qtd: ${qtd}`);
	let numeros = {};

	while (Object.keys(numeros).length <= qtd) {
        var next = getRandomIntInclusive(min, max)
        if (numeros[next]) continue
		numeros[next] = true
    }
    var arrayresult = Object.keys(numeros)
	return arrayresult.sort();
}
