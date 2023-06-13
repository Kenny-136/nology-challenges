// You have an array of names all in lowercase you want a new array with all names but uppercase


let nameArray = ['amruta', 'keelan', 'kenny', 'martyna', 'alex']

const makeItUpperCase = (array) => array.map((names) => names.toUpperCase())
console.log(makeItUpperCase(nameArray))

// You have an array of numbers, you want a new array with each number decremented by 5

let numArray = [1,2,3,4,5,6,7,8,9]

const addFive = (array) => array.map((num) => num - 5)

console.log(addFive(numArray))