import CardList from './components/CardList/CardList'
import planetsArray from './data'
function App() {
  return (
    <>
    <h1>Planets Challenge!</h1>
    <CardList planetsArray={planetsArray}/>
    </>
  )
}

export default App
