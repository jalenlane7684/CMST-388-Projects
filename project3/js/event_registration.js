/*
		Your Name: <Jalen Lane>
		Last Modified Date: <12/08/2024>
		File: event_registration.js
		File Description: <Enter a brief paragraph to describe the purpose of this file>
*/

// Set the minimum and maximum number of tickets able to be purchased
var minTickets = 1;
var maxTickets = 3;
// Set variables for the ticket cost
var costPerTicket = 5.00;
var ticketSurcharge = 0.50;

/*** YOUR CODE STARTS BELOW HERE ***/
const timer = document.getElementById('timer');
const duration = new Date().getTime() + 600000;
const contactInfo = document.getElementById('contactInformation');
const resetButton = document.getElementById('reset');

resetButton.addEventListener('click', () => {
	contactInfo.style.display = "none";
})



const timerId = setInterval(() => {
	const now = new Date().getTime();
	const distance = duration - now;

	let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

	if (minutes < 10) {
		minutes = `0${minutes}`;
	}

	if (seconds < 10) {
		seconds = `0${seconds}`;
	}

	if (distance <= 0) {
		timer.textContent = "00:00";
		clearInterval(timerId);
		alert('The time to purchase tickets has expired.');
		window.location.href = window.location.href;
	} else {
		timer.textContent = `${minutes}:${seconds}`;
	}
}, 1000);


const calculateTotal = () => {
	const ticketsInput = document.getElementById("numTickets");
	let numOfTickets = parseInt(ticketsInput.value);
	console.log(numOfTickets);
	const errorMessage = document.getElementById('msgTickets');
	const totalCost = document.getElementById('totalCost');

	if (isNaN(numOfTickets) || numOfTickets > 3 || numOfTickets < 1) {
		errorMessage.textContent = "The input is not a number between 1 and 3";
		ticketsInput.style.backgroundColor = "yellow";
		contactInfo.style.display = "none";
	} else {
		errorMessage.textContent = "";
		ticketsInput.style.backgroundColor = "";
		contactInfo.style.display = "block";
		if (numOfTickets % 2 != 0) {
			totalCost.value = "$" + (numOfTickets * costPerTicket + ticketSurcharge * numOfTickets) + "0";
		} else {
			totalCost.value = "$" + (numOfTickets * costPerTicket + ticketSurcharge * numOfTickets);
		}
	}
}

const completePurchase = () => {
	const name = document.getElementById('name');
	const email = document.getElementById('email');
	const nameError = document.getElementById('msgname');
	const emailError = document.getElementById('msgemail');
	let validName = false;
	let validEmail = false;

	if (name.value == "") {
		nameError.textContent = "Please input a name.";
		name.style.backgroundColor = "yellow";
		validName = false;
	} else {
		nameError.textContent = "";
		name.style.backgroundColor = "";
		validName = true;
	}
	if (email.value == "" || (!(email.value.includes("@")) || !email.value.includes("."))) {
		emailError.textContent = "Please input a valid email address! It must contain '@' and '.'";
		email.style.backgroundColor = "yellow";
		validEmail = false;
	} else {
		emailError.textContent = "";
		email.style.backgroundColor = "";
		validEmail = true;
	}

	if (validName && validEmail) {
		clearInterval(timerId);
		alert(`Thank you for your purchase ${name.value}!`);
		window.location.href = window.location.href;
	}
}
