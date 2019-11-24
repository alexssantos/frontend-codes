// CREATE AND ADD ELEMENT
function addElement(parentId, elementTag, elementId, html) {
	// Adds an element to the document
	var parentElement = document.getElementById(parentId);

	var newElement = document.createElement(elementTag);
	newElement.setAttribute('id', elementId);
	newElement.innerHTML = html;

	parentElement.appendChild(newElement);
}


// REMOVE ELEMENT BY ID
function removeElement(elementId) {
	// Removes an element from the document
	var element = document.getElementById(elementId);
	element.parentNode.removeChild(element);
}


// ADD TAG: 
function funcSetBrTag(parentElement, TAG) {
	parentElement.appendChild(document.createElement(TAG))
}

function setMetaCharset(charset = "utf-8") {
	var metaElement = document.createElement("meta")
	metaElement.setAttribute("charset", charset)
	document.head.appendChild(metaElement)
}

/*