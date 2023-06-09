// MVP

// Create a function called delayedIncDec(n, mode, delay) - this function needs to return a promise<number>,
// the value of the promise should be n after incrementing or decrementing depending on the mode

// if mode is anything other than inc or dec - reject the promise

// n - some number

// mode - string - "inc", "dec"

// inc will cause the function to increment n by 1

// dec will cause the function to decrement by 1

// timeout - delay in ms - your function will return a promise after that time

// timeout should have a default value, if the function is called without the 3rd argument, it should default to 2500

// call this function three times with different numbers and values of dec and delay
// console.log the value of rejected or resolved promise

const delayedIncDec = (n, mode, delay = 2500) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof n === 'number' && mode === 'inc') {
        resolve(`${n} incremented by 1 = ${n+1}`)
      } else if (typeof n === 'number' && mode === 'dec') {
        resolve(`${n} decrmented by 1 is ${n-1}`)
      } else if (typeof n === 'number') {
        reject(`Invalid mode, Please only input inc / dec`)
      } else if (typeof n !== 'number') {
        reject(`Invalid Input, Please Only Input Number`)
      } else {
        reject(`Invalid Input`)
      }
    }, delay)
  })
}
delayedIncDec(1 , 'inc', 1000)
  .then((value) => {
    console.log(value);
  })
  .catch((e) => {
    console.log(e)
  })

  delayedIncDec(1 , 'nope', 2000)
  .then((value) => {
    console.log(value);
  })
  .catch((e) => {
    console.log(e)
  })

  delayedIncDec(1 , 'dec', 3000)
  .then((value) => {
    console.log(value);
  })
  .catch((e) => {
    console.log(e)
  })

  delayedIncDec("im not a number" , 'inc', 4000)
  .then((value) => {
    console.log(value);
  })
  .catch((e) => {
    console.log(e)
  })