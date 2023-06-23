const countryInput = document.querySelector('#country-input')
const searchButton = document.querySelector('#search-button')

async function searchCountry(name) {
  const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
  console.log(name)
  const data = await response.json();
  console.log(data)
  document.querySelector('h2').innerHTML = data[0].name.official
  document.querySelector('img').src = data[0].coatOfArms.png
  document.querySelector('#continent').innerText = data[0].continents
  document.querySelector('#capital').innerHTML = data[0].capital

}

searchButton.addEventListener('click', () => {
  searchCountry(countryInput.value)
})