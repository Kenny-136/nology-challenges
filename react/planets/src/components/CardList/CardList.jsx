import styles from './CardList.module.scss'
import Card from '../Card/Card'

const CardList = ({planetsArray}) => {
  return (
    <section className={styles.list}>
      {planetsArray.sort((a,b) => (a.diameterInKm - b.diameterInKm)).map((planet, index) =>
        <Card 
        key={index} 
        planet={planet} 
        />
      )}
    </section>
  )
}

export default CardList