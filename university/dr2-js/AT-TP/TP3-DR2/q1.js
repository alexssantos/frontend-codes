setMetaCharset()
var divQ1 = document.getElementById('q1');

//divQ1.className = 'row';

var labelValMin = getElementOrCreate(divQ1, "valMin", true, "number", "valor minimo :")
var labelValMax = getElementOrCreate(divQ1, "valMax", true, "number", "valor maximo :")

// ============================================
// FUNCS 
// ===========================================

function getElementOrCreate(parentElement, idElement, required = false, type = "text", label = "", value = "") {
	var element = document.getElementById(idElement);
	if (!element)
		element = this.funcCreateInputElement(idElement, required, type, label, value)

	parentElement.appendChild(element)
	return element;
}

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

function funcSetBrTag(element) {
	element.appendChild(document.createElement("br"))
}

function setMetaCharset(charset = "utf-8") {
	var metaElement = document.createElement("meta")
	metaElement.setAttribute("charset", charset)
	document.head.appendChild(metaElement)
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