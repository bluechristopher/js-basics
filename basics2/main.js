// Step 1: identify element by id
const header = document.getElementById("header");
const button = document.getElementById("colorButton");

// Step 2: define an array of colours
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

let index = 0;

// Step 3: Define a function that will run when the button is clicked
function changeColor() {
	header.style.backgroundColor = colors[index];
	index++;
	if (index >= colors.length) {
		index = 0;
	}
}

// Step 4: Add event listener to the button
button.addEventListener("click", changeColor);

// Add mouseover and mouseout effects
// Using nameless functions
button.addEventListener("mouseover", function() {
	button.style.backgroundColor = "teal";
	button.style.color = "orange";
	button.textContent = "Click Me!!!!!";
});

button.addEventListener("mouseout", function() {
	button.style.backgroundColor = "transparent";
	button.style.color = "black";
	button.textContent = "Change Colour";
});