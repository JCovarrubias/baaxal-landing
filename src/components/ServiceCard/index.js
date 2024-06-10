import * as React from "react"
import * as styles from "./styles.module.scss"
import "../../sass/basics.scss"

const ServiceCard = ({image, description}) => {
  return (
    <div className={styles.card}>
      <img className={styles.img} src={image} alt=""/>
      <p className={styles.desc}><b>{ description }</b></p>
    </div>
  )
}

export default ServiceCard