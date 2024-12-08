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

	if (isNaN(numOfTickets) || numOfTickets > 3 || numOfTickets < 1) {
		errorMessage.textContent = "The input is not a number between 1 and 3";
		ticketsInput.style.backgroundColor = "yellow";
	} else {
		errorMessage.textContent = "";
		ticketsInput.style.backgroundColor = "";
	}
}

const completePurchase = () => {

}
