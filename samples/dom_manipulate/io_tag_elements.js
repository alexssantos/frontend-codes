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