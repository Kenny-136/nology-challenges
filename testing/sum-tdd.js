
// A function that calculates the sum of numbers

// It should throw an error if one or more parameters are not a number

// if no parameters are passed -> thor an error

// I want it to sum any number of arguments <= 1

export const sum = (...arrayOfNums) => {
  if (arrayOfNums.length === 0) {
    console.log(arrayOfNums, 'what is happening')
    throw new Error('no arguments are passed')
  } else if (arrayOfNums.filter(num => (typeof num !== 'number')).length > 0 ) {
    throw new Error('One or more parameters are not a number.')
  } else {
    return arrayOfNums.reduce((result, num) => result = result + num, 0) 
  }
}
