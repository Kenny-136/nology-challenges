import { useState } from 'react'
import styles from './App.module.scss'

function App() {
  const [darkMode , setDarkMode] = useState(false)

  const toggleMode = () => {
    setDarkMode(!darkMode)
  }
  const [numberDescription , setNumberDescription] = useState('Zero')

  const randomNumberButton = () => {
    setRandomNumber(Math.floor(Math.random() * 100))
    setNumberDescription(randomNumber % 2 === 0 ? 'The Number is Even' : 'The Number is Odd')
  }
  const [randomNumber, setRandomNumber] = useState(0)
  return (
    <div className={darkMode ? styles.darkMode : styles.lightMode}>
      <button onClick={toggleMode}>{darkMode ? 'Change to Dark Mode' : 'Change to Light Mode'}</button>
      <h1>{randomNumber}</h1>
      <h2>{numberDescription}</h2>
      <button onClick={randomNumberButton}>Get Random Number</button>
    </div>

  )
}

export default App
