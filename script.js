import { guessNum } from "./console_game.js"

let output = document.getElementById("res")
output.innerHTML = "A new random number has been generated. <br> Guess a number between 1 and 100."
let input = document.getElementById("num")
input.addEventListener("keyup", function (e) {
	if (e.key == "Enter") {
		let num = parseInt(input.value)
		console.log(num)
		let message = guessNum(num)
		input.value = ""
		output.innerHTML = message

		if (message !== "Congratulations! You guessed the number!") {
			// Apply the shake animation
			input.classList.add("shake")
			// Remove the shake class after the animation ends to allow it to be reapplied
			setTimeout(() => input.classList.remove("shake"), 500)
		}
	}
})
