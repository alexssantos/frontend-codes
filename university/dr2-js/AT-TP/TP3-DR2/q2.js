/*	QUESTAO 2



*/


// ===================
// DRAW ELEMENTS
// ===================
var divQ2 = document.getElementById('q2');

divQ2.appendChild(document.createTextNode("Questao 2"))
divQ2.appendChild(document.createElement("br"))

var labelValMin = funcCreateInputElement("inputFac", true, "number", "Fatorial :")
addSpanToParent(labelValMin, "spanFac")
divQ2.appendChild(labelValMin)

var facButton = document.createElement("button")
facButton.appendChild(document.createTextNode("Calcular"))
divQ2.appendChild(facButton)

var resElement = document.createElement("p")
resElement.setAttribute("id", "resposta2")
divQ2.appendChild(resElement)


// CALCULAR - CLICK EVENT
facButton.addEventListener("click", () => {
	let inputFac = document.getElementById("inputFac"),
		res = document.getElementById("resposta2")

	var inputFacVal = inputFac.value
	validateNumberField(inputFacVal, "spanFac")

	var timeA = Date.now()
	var facVal = parseInt(inputFacVal)
	var diff = Date.now() - timeA 	//secounds

	var result = factorial(facVal)
	res.textContent = `Resultado: ${facVal}! = ${result} (${diff} milisegundos).`
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

function generateRamdonNumbers(qtd, min, max) {
	if (typeof (+value) != "number")
		return "Type a number. try again!"
	if (value <= 0)
		return 1
	return value * factorial(value - 1)
}