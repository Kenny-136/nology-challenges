// ## Challenge: Tell me the day!

let day = 103

switch (day > 7) {
  case true:
    day = day % 7
    switch (day) {
      case (day > 7):
        console.log(' i work')
      case 1:
        console.log("Monday")
        break
      case 2:
        console.log("Tuesday")
        break
      case 3:
        console.log("Wednseday")
        break
      case 4:
        console.log("Thursday")
        break
      case 5:
        console.log("Friday")
        break
      case 6:
        console.log("Saturday")
        break
      case 7:
        console.log("Sunday")
        break
    }
    break

    case false: 
    switch (day) {
      case 1:
        console.log("Monday")
        break
      case 2:
        console.log("Tuesday")
        break
      case 3:
        console.log("Wednseday")
        break
      case 4:
        console.log("Thursday")
        break
      case 5:
        console.log("Friday")
        break
      case 6:
        console.log("Saturday")
        break
      case 7:
        console.log("Sunday")
        break
    }
}

// Eye Colour

let parent1 = "brown"
let parent2 = "green"

if (parent1 ==="brown" && parent2 ==="brown") {
  console.log(`Yuur eye colours are ${parent1} and ${parent2} the chances of your child having a brown eyes is 75%, green is 18.75% and blue is 6.25%`)
} else if 
  (parent1 === 'green' && parent2 === 'brown' || parent2 ==='green' && parent1 === 'brown') {
  console.log(`Your eye colours are ${parent1} and ${parent2}, the chances of your child having brown eyes is 50%, green is 37.5% and blue is 12.5%`)
} else if 
  (parent1 === 'blue' && parent2 === 'brown' || parent1 === 'brown' && parent2 === 'blue') {
  console.log(`Your eye colours are ${parent1} and ${parent2}, the chances of your child having brown eyes is 50%, green is 0% and blue is 50%`)
} else if 
  (parent1 === 'green'  && parent2 === 'green') {
    console.log(`Your eye colours are ${parent1} and ${parent2}, the chances of your child having brown eyes is <1%, green is 75% and blue is 25%`)
} else if 
  (parent1 === 'green' && parent2 === 'blue' || parent1 === 'blue' && parent2 === 'green') {
    console.log(`Your eye colours are ${parent1} and ${parent2}, the chances of your child having brown eyes is 0%, green is 50% and blue is 50%`)
} else if 
  (parent1 === 'blue' && parent2 === 'blue') {
    console.log(`Your eye colours are ${parent1} and ${parent2}, the chances of your child having brown eyes is 0%, green is 1% and blue is 99%`)
}
