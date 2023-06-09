// # Loops challenges

// ## Challenge: Sum of n

// MVP:
// Create a function with a for loop that will add all the numbers up to n

// You should create a variable to set the upper limit of your loop
// Your loop should increment by 1 on each iteration
// Your loop should print the final result

const sum = (n) => {
  let result = 0
  for (let i = 0; i <= n; i++) {
    sum += i
  }
  return result
}

// ```
// sum(10) => 55
// ```

// ## Challenge: Write a shopping list

// MVP:
// Create a function with a for loop that will add numbers to your shopping list

// Store the following array in a variable
// Your loop should iterate through every value in the array
// Your loop should print a shopping list with the number and the name of the item

// ```
// ['milk', 'watermelon', 'eggs', 'soap', 'butter', 'apples', 'ice-cream'];
// =>
// // In Console

// 1. milk
// 2. watermelon
// 3. eggs
// 4. soap
// 5. butter
// 6. apples
// 7. ice-cream
// ```


const shoppingList = (array) => {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(`${i+1}. ${element}`)
  }
}

// ## Challenge: Capitalizing Odd Positioned Letters

// MVP
// Create a variable with a string of your choice
// Loop through the letters in this string and build a new string
// If the current index is odd, capitalize the letter before adding it to the new string
// Bonus
// If the current index is even increment the letter
// E.g: a becomes b, d becomes e, t becomes u
// Final: z becomes a
let variable = "nology"
const weirdFunction = (variable) => {
  let newString = []
  for (let i = 0; i < variable.length; i++) {
    if ( i % 2 === 1) {
      newString.push(variable[i].toUpperCase())
    } else if ( variable == "z" && i % 2 === 0 ) {
      newString.push("a")
    } else if ( i % 2 === 0 ) {
      newString.push(String.fromCharCode(variable[i].charCodeAt()+1))
    }
  }
  return newString.toString()
}

// # Challenge: Removing Vowels

// MVP
// Create a variable with a string of your choice
// Loop through the letters in this and build a new string
// The new strings should be the same as the input with the vowels missing

// ```
// E.g: calum => clm, rachel => rchl, martyna => mrtyn
// ```

const removingVowels = (variable) => {
  let newString = []
  for (let i = 0; i < variable.length; i++) {
    if (/([aiueo])/.test(variable[i])) {
    } else {
      newString.push(variable[i])
    }
  } 
  return newString.toString()
}
// Bonus
// Keep vowels in the new strings if they are succeeded by the letters l, m, or r


// ```
// E.g: calum => calum, rachel => rchel, martyna => martyn
// ```

const removingVowelsBonus = (variable) => {
  let newString = []
  for (let i = 0; i < variable.length; i++) {
    if (/([aiueo])/.test(variable[i])) {
      if (variable[i+1] === "l" || variable[i+1] === "m" || variable[i+1] === "r")
      newString.push(variable[i])
    } else {
      newString.push(variable[i])
    }
  } 
  return newString.toString()
}

// ## Loop through an array backwards

// Console.log() every element from the array
let array = ['apple', 'orange', 'mango', 'pears', 'papaya']
for (let i = 0; i < array.length; i++) {
  console.log(array[array.length - (i + 1)])
}