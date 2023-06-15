// # Lad in the pub

// 1. Create a function that takes 3 parameters (age, country level of drunk) and returns a string or a boolean that says if someone can enter the pub or not (drunk above 3 is too much)

// 2. Add a script.js file to the provided code and add the following functionality:

// -   The function should be triggered on form submit.
// -   a message should be rendered under the form "Come in and have a beer" / "You can't have a beer"
// -   If the person is allowed to enter the pub, the colour of the bottle and the button background should change to green.
// -   If the person is not allowed to enter the pub, the bottle and the message div background should be red.
// -   Only one message should be rendered, if there is already a message on the page, it should be removed when the user clicks the button again and a new one should be displayed.

// BONUS: Familiarise yourself with the following docs: https://developer.mozilla.org/en-US/docs/Web/API/FormData and implement the challenge using FormData

// Aus, Poland , UK,   Drinking Age = 18
// US Drinking Age = 21.

const age = document.querySelector("#age")
const country = document.querySelector("#country")
const levelOfDrunk = document.querySelector("#drunk")
const checkingButton = document.querySelector("#btn")
const para = document.querySelector("p")
const body = document.querySelector("body")

const canYouHaveMoreBeer = (age, country, levelOfDrunk) => {
  let legalAgeInCountry = country.value === "USA" ? 21 : 18
  let legalToDrink = age.value >= legalAgeInCountry
  if (levelOfDrunk.value <= 3 && legalToDrink) {
    resetForm()
    para.innerHTML = "Come in and have a beer"
    body.classList.remove("red")
    body.classList.toggle("green")
  } else {
    resetForm()
    para.innerHTML = "You can't have a beer"
    body.classList.remove("green")
    body.classList.toggle("red")
  }
}
const resetForm = () => {
  age.value = ""
  country.value = ""
  levelOfDrunk.value = ""
}

checkingButton.addEventListener("click", () => {
  event.preventDefault()
  console.log(canYouHaveMoreBeer(age, country, levelOfDrunk))
})
