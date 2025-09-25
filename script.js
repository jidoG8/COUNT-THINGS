/* 
    @date: 2025/09/25
    @description: Basic counter app 
*/

const countEl = document.getElementById("count-el");
const saveEl = document.getElementById("save-el");

let count = 0;

// increment value from 0 upward on click
const increment = () => {
	count += 1;
	countEl.textContent = count;
	console.log(count);
};

// save the count value set
const save = () => {
	const digit = ` ${count} - `;

	saveEl.textContent += digit;

	console.log("Saved: " + count);
	countEl.textContent = 0;
	count = 0;
};

let welcomeEl = " Hi, hiya doing?";
let name = "Moses";
let greeting = welcomeEl + " " + name + "!";

// add animation to buttons
document.addEventListener("DOMContentLoaded", () => {
	const buttons = document.querySelectorAll("button");

	button.forEach((button) => {
		button.addEventListener("click", () => {
			this.classList.add("animate-bounce");

			setTimeout(() => {
				this.classList.remove("animate-bounce");
			}, 1000);
		});
	});
});
