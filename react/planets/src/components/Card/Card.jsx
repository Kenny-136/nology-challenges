import style from './Card.module.scss'

const Card = ({planet}) => {
  const {image, planetName, diameterInKm, distanceFromSun, numberOfMoons, lengthOfYear} = planet;

  return <div className={`${style.card} ${numberOfMoons > 0 ? style.moonPlanet : style.noMoonPlanet}`}>
    <img src={image} alt="" />
    <h2>{planetName}</h2>
    <h3>Diameter: {diameterInKm}</h3>
    <h3>Distance from Sun: {distanceFromSun}</h3>
    <h3>Number of Moons: {numberOfMoons}</h3>
    <h3>Length of Year: {lengthOfYear}</h3>
  </div>
}

export default Card;