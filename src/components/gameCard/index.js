import * as React from "react"
import * as styles from "./styles.module.scss"
import "../../sass/basics.scss"

const GameCard = ({gameImage}) => {
  return (
    <div className={styles.card}>
      <img className={styles.img} src={gameImage} alt=""/>
    </div>
  )
}

export default GameCard