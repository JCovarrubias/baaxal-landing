import * as React from "react"
import * as styles from "./styles.module.scss"
import "../../sass/basics.scss"

const ProcessCard = ({image, description}) => {
  return (
    <div className={styles.card}>
      <img className={styles.img} src={image} alt=""/>
      <p className={styles.desc}>{ description }</p>
    </div>
  )
}

export default ProcessCard