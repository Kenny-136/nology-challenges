import Card from "./components/Card/Card.jsx";
import CardList from "./components/CardList/CardList.jsx"
import Header from "./components/Header/Header.jsx"
function App() {
  return (
    <>
    <Header />
    <CardList>
      <Card albumTitle="The Dark Side Of The Moon" bandName="Pink Floyd" albumRating="4.6" albumCover="https://media.npr.org/assets/img/2013/08/26/dark_side_of_the_moon_desktop_by_ezsteve-077138f288f4fad43c766e432e6f272f258a887a-s1100-c50.jpg"/>
      <Card albumTitle="The Dark Side Of The Moon" bandName="Pink Floyd" albumRating="4.6"/>
      <Card albumTitle="The Dark Side Of The Moon" bandName="Pink Floyd" albumRating="4.6"/>
      <Card albumTitle="The Dark Side Of The Moon" bandName="Pink Floyd" albumRating="4.6"/>
      <Card albumTitle="The Dark Side Of The Moon" bandName="Pink Floyd" albumRating="4.6"/>
      <Card albumTitle="The Dark Side Of The Moon" bandName="Pink Floyd" albumRating="4.6"/>
      <Card albumTitle="The Dark Side Of The Moon" bandName="Pink Floyd" albumRating="4.6"/>
      <Card albumTitle="The Dark Side Of The Moon" bandName="Pink Floyd" albumRating="4.6"/>
    </CardList>
    </>
  )
}

export default App
