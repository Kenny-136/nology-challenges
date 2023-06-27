import style from './Card.module.scss'

const Card = ({albumTitle, bandName, albumRating, albumCover}) => {
  return <div 
    className={style.card}
    style={
      {backgroundImage: `url(${albumCover})`}
    }
    >
      <div 
      className={style.card}
      >
        <h3>{albumTitle}</h3>
        <h3>{bandName}</h3>
        <h3>{albumRating}</h3>
      </div>
  </div>
};

export default Card;