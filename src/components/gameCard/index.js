import * as React from "react"
import * as styles from "./styles.module.scss"
import "../../sass/basics.scss"

const GameCard = ({gameImage, gameUrl}) => {
  return (
    <div className={styles.card}>
      <a href={gameUrl}>
        <img className={styles.img} src={gameImage} alt=""/>
      </a>
    </div>
  )
}

export default GameCard