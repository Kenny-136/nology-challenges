// given an array of character codes, convert the codes to letters and reduce it to a single string

const arrOfCodes = [114, 101, 100, 117, 99, 101];

console.log(
  arrOfCodes.reduce((accumulator, number) =>  accumulator + String.fromCharCode(number), '')
)

// given an array of letters, reduce them to get the sum of character codes
const lettArr = ["c", "h", "e", "e", "s", "e"];

console.log(
  lettArr.reduce((result, letter) => result + (letter.charCodeAt(0)), 0)

)
// use reduce to filter an array to only get numbers greater than 10

const numsArr = [1, 345, 545, 2, 5, 7, 907];

const filterNumsArr = numsArr.filter(number => number > 10)

console.log(
  numsArr.reduce((accumulator, number) => {
    number > 10 ? accumulator.push(number) : accumulator
    return accumulator
  }, [])
)

// use reduce to create an array of numbers (use numsArr) to the power of 2
console.log(
  numsArr.reduce((accumulator, number) => {
    number > 10 ? accumulator.push(number ** 2) : accumulator
    return accumulator
  }, [])
)