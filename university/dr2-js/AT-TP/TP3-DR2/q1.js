var divQ1 = document.getElementById('q1');

var labelValMin = funcCreateInputElement("valMin", true, "number", "valor minimo :")
addSpanToParent(labelValMin, "spanMin")
divQ1.appendChild(labelValMin)
var labelValMax = funcCreateInputElement("valMax", true, "number", "valor maximo :")
addSpanToParent(labelValMax, "spanMax")
divQ1.appendChild(labelValMax)

var buttonGen = document.createElement("button")
buttonGen.appendChild(document.createTextNode("Calcular"))
divQ1.appendChild(buttonGen)

var resElement = document.createElement("p")
resElement.setAttribute("id", "resposta")
divQ1.appendChild(resElement)



// CALCULAR - CLICK EVENT
buttonGen.addEventListener("click", () => {
	let min = document.getElementById("valMin"),
		max = document.getElementById("valMax"),
		res = document.getElementById("resposta")

	validateNumberField(min.value, "spanMin")
	validateNumberField(max.value, "spanMax")

	var minVal = parseInt(min.value)
	var maxVal = parseInt(max.value)

	if (minVal > maxVal) {
		res.setAttribute("class", "error")
		res.textContent = "Erro: valor minimo maior valor maximo"
		return;
	}
	else res.textContent = ""

	var numeros = countarEntreValores(minVal, maxVal)
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

function countarEntreValores(min, max) {
	console.log(`Executando função pura com argumentos min: ${min} e max: ${max}`);
	let numeros = {};
	let i = min + 1;

	while (i < max) {
		if ((i % 2 == 0) || (i % 3 == 0)) {
			numeros[i] = true
		}
		i++;
	}
	return Object.keys(numeros);
}

/*
addRow()

// -----------------
function addRow() {
	//new DIV
	const div = document.createElement('div');
	div.className = 'row';

	//inserting on DIV TAGS by TEXT
	div.innerHTML = `
	  <input type="text" name="name" value="" />
	  <input type="text" name="value" value="" />
	  <label>
		<input type="checkbox" name="check" value="1" /> Checked?
	  </label>
	  <input type="button" value="-" onclick="removeRow(this)" />
	`;

	//insert on DOM
	document.getElementById('q1').appendChild(div);
}

function removeRow(input) {
	document.getElementById('content').removeChild(input.parentNode);
}
*/