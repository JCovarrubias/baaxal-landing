import * as React from "react"
import * as styles from "./styles.module.scss"
import '../../sass/basics.scss'

import AboutUsCard from "../AboutUsCard"

const AboutUsSection = () => {
  const cards = [
    { img: require("../../images/gamedesign.png").default, description: "CONSULTORIA DE DISÑO DE VIDEOJUEGOS (GAME DESIGN)" },
    { img: require("../../images/artDesign.png").default, description: "DESARROLLO DE ARTE Y DISEÑO GRÁFICO" },
    { img: require("../../images/development.png").default, description: "DESARROLLO DE VIDEOJUEGOS" },
    { img: require("../../images/gamification.png").default, description: "GAMIFICACIÓN DE PLATAFORMAS" },
  ]

  return (
    <div id="aboutUs" className={styles.container}>
      <h1 className={styles.title}>NUESTROS <b className={styles.highlight}>SERVICIOS</b></h1>
      <div className={styles.cardsContainer}>
        {
          cards.map((data, index) => <AboutUsCard image={data.img} description={data.description} key={index} />)
        }
      </div>
    </div>
  )
}

export default AboutUsSection