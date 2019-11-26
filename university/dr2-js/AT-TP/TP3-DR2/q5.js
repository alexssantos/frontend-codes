/* questao 5
Crie um componente que possua 3 caixas de texto que só aceitam números e tenha os rótulos (label) lado A, lado B e lado C. 
O componente deve ainda possuir um botão calcular que quando acionado deve dizer se um triângulo formado por esses 3 lados 
é um triângulo equilátero, isósceles ou escaleno.
*/


var divQ5 = document.getElementById('q5');

divQ5.appendChild(document.createTextNode("Questao 5"))
divQ5.appendChild(document.createElement("br"))

var ladoA = funcCreateInputElement("q5input1", true, "number", "Lado A :")
addSpanToParent(ladoA, "q5Span1")
divQ5.appendChild(ladoA)

var ladoB = funcCreateInputElement("q5input2", true, "number", "Lado B :")
addSpanToParent(ladoB, "q5Span2")
divQ5.appendChild(ladoB)

var ladoC = funcCreateInputElement("q5input3", true, "number", "Lado C:")
addSpanToParent(ladoC, "q5Span3")
divQ5.appendChild(ladoC)

var btnQ5 = document.createElement("button")

btnQ5.appendChild(document.createTextNode("Calcular"))
btnQ5.setAttribute("id", "q5Btn")
divQ5.appendChild(btnQ5)

var resElement = document.createElement("p")
resElement.setAttribute("id", "q5Resposta")
divQ5.appendChild(resElement)

// CALCULAR - CLICK EVENT
btnQ5.addEventListener("click", () => {
	let ladoA = document.getElementById("q5input1"),
		ladoB = document.getElementById("q5input2"),
		ladoC = document.getElementById("q5input3"),
		res = document.getElementById("q5Resposta")

	res.textContent = ""

	var okA = validateNumberField(ladoA.value, "q5Span1")
	var okB = validateNumberField(ladoB.value, "q5Span2")
	var okC = validateNumberField(ladoC.value, "q5Span3")

	if (!okA || !okB || !okC) return

	var valA = parseInt(ladoA.value)
	var valB = parseInt(ladoB.value)
	var valC = parseInt(ladoC.value)

	res.textContent = "5) resposta: " + trianguloType(valA, valB, valC)
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
		return false
	}
	else {
		span.innerHTML = "";
		return true
	}
}


// =====================
// PURE FUNCS
// =====================

function trianguloType(A, B, C) {
	if ((A == B) && (A == C))
		return "equilatero"
	else if ((A == B) || (A == C) || (B == C))
		return "isosceles"
	else if ((A != B) && (A != C))
		return "escaleno"
}
