//Cache all the elements
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName('li')
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');
var btn5 = document.getElementById('btn5');
var btn6 = document.getElementById('btn6');

var variables = [btn1, btn2, btn3, btn4, btn5, btn6];

//input length
function inputLength() {
	return input.value.length;
}

//Creating any element
function createElement(element, text) {
	//creating an element
	var li = document.createElement(element);
	li.appendChild(document.createTextNode(text));
	return li;
}

//creating list element
function createListElement(){
	//create list element and a button associated with it
	var li = createElement("li", input.value);
	ul.appendChild(li)
	li.onclik = toggle(li)

	//create a button associated to a list item
	var btn = createElement("button", "X")
	li.appendChild(btn)
	btn.onclick = removeElement(btn)

	//clear the input
	input.value = "";
}


//button click event listener on the input
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement()
	}
}

//keypress event listener on the input
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

//Turn class done on and off when click on li
function toggle(li){
	li.addEventListener("click", function(){
			li.classList.toggle('done');
		});
}

//remove element on button click
function removeElement(btn){
	btn.addEventListener("click", function(){
		btn.parentElement.remove();
	});
}

//calling back the toggle listener
for(i=0; i<li.length; i++){
	toggle(li[i]);
}

//implementing button on click listener
button.addEventListener("click", addListAfterClick);

//implementing keypress on keypress event listener
input.addEventListener("keypress", addListAfterKeypress);

//calling back the item remove listener
for(i=0; i<variables.length; i++){
	removeElement(variables[i]);
}
