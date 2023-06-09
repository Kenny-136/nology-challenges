// ## Challenge: Listing Hobbies

// Create an array with 3 of your hobbies
const myHobbies = ["Video Games", "Racing", "Badminton"]
// Print in the console the first hobby in the array
console.log(myHobbies[0])

// Remove that first hobby from the array and store that hobby in a variable
let firstHobby = myHobbies.shift()

// Store the length of the array in a variable
let hobbiesArrayLength = myHobbies.length

// Add another hobby at the end of the array
myHobbies.push("Soccer")

// Print that last hobby in the console
console.log(myHobbies[myHobbies.length - 1])

// Bonus:
// Join all your hobbies in a single string each hobby being comma separated (i.e. "My hobbies are: hobby1, hobby2, hobby2")
console.log(`My Hobbies are ${myHobbies.join(", ")}`)

// MVP
// Create an array containing 5 grocery items you often buy
// Log this list to the console, make sure the output is pipe delimited
// ['apple', 'pear', 'papaya', 'mango'] => 'apple|pear|papaya|mango'

let groceryList = ['apple', 'pear', 'papaya', 'mango', 'orange']
console.log(groceryList.join("|"))