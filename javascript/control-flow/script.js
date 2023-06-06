// ## Challenge: Comparing Numbers

// MVP:
// Check for the smallest value

// Create two variables x & y
// Write an if / else block
// It should compare a number x to another number y
// It should print ("x is greater than y") in the console
// Or "x is smaller than y"
// Or "x is equal to y"
// Depending on the value of x and y
let x = 1
let y = 2

if (x > y) {
  console.log('X is greater than Y')
} else if ( x == y) {
  console.log('X is equal to Y')
} else if (x < y) {
  console.log('X is smaller than y')
}

// ## Challenge: User Input Type

// MVP:
// Console log the user's input depending on the data type

// Create a variable userInput
// Write an if / else block
// If the input is a number, it should console log that number but squared
// If the input is a string, it should console log that input
// If the input is anythig else, the console should say "invalid input"

let userInput = 2

if (typeof(userInput) === 'number') {
  console.log(userInput*userInput)
} else if (typeof(userInput) === 'string') {
  console.log(userInput)
} else {
  console.log('Invalid Input')
}