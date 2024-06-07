import * as React from "react"
import * as styles from "./styles.module.scss"
import "../../sass/basics.scss"

const GameCard = ({gameImage, gameUrl, gameName}) => {
  return (
    <div className={styles.galleryItem}>
      <a href={gameUrl}>
        <img src={gameImage} alt={gameName} className={styles.galleryImage} />
      </a>
    </div>
  )
}

export default GameCard