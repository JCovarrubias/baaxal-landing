import * as React from "react"
import * as styles from "./styles.module.scss"
import "../../sass/basics.scss"

const AboutUsCard = ({image, description}) => {
  return (
    <div className={styles.card}>
      <img className={styles.img} src={image} alt=""/>
      <p className={styles.desc}>{ description }</p>
      {/* <button className={styles.button}></button> */}
    </div>
  )
}

export default AboutUsCard