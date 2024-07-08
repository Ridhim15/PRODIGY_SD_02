console.log(
	"This is the Number guessing game! ( Console exclusive ) You can try to run the function guess(num) in the console to play the game."
)
let x = Math.floor(Math.random() * 100) + 1
console.log("A random number between 1 and 100 has been chosen. Try to guess it!")
/* console.log(x) */
function guessNum(num) {
	let message = ""

	// Defualt case if not a valid number
	if (isNaN(num)) {
		return "Please enter a valid number."
	}
	// Using diff to kinda simulate the ver close and close functionality
	let diff = Math.abs(num - x)
	// Corret Guess :)
	if (diff === 0) {
		return "Congratulations! You guessed the number!"
	}

	if (diff <= 5) message = "Very close!"
	else if (diff <= 10) message = "Close!"
	else if (diff <= 20) message = "A little close."
	else message = "Far off."

	if (num > x) {
		message += "\nYour number is greater. Try entering a lower value."
	} else if (num < x) {
		message += "\nYour number is smaller. Try entering a higher value."
	}
	return message
}

if (typeof window != "undefined") {
	window.guess = num => console.log(guessNum(num))
}

export { guessNum }
console.log("guess(num) to guess the number in console.")

