//Calculating Moon Orbits
// ---------------------
const moonOrbits = (numberOfEarthDays) => {
  let moonRotationTimeInEarthDays = 27
  return numberOfEarthDays / moonRotationTimeInEarthDays
}
console.log(moonOrbits(54))
console.log(moonOrbits(365))

// Working with Circles
// -------------------

const circleArea = (radius) =>  Math.PI * (radius ** 2)
const circlePerimeter = (radius) => 2 * Math.PI * radius

console.log(circleArea(10))
console.log(circlePerimeter(10))

// Years to Days & Seconds
// ------------------------

const ageInDays = (age) => age * 365.2425
const ageInSeconds = (age) =>  age * 31644000

console.log(ageInDays(32))
console.log(ageInSeconds(32))

// Return the Remainder from two numbers
// --------------

const remainder = (num1, num2) => num1 % num2
console.log(remainder(1, 3))
console.log(remainder(3, 4))
console.log(remainder(-9, 45))
console.log(remainder(5, 5))

// Basketball Points
// -----------------
const totalScore = (twoPointer, threePointers) => (twoPointer * 2) + (threePointers * 3)
console.log(totalScore(2, 4))

// Less than 100?
// --------------
const lessThan100 = (num1, num2) => (num1 + num2 < 100)
console.log(lessThan100(22,15))
console.log(lessThan100(83,34))
console.log(lessThan100(3,77))