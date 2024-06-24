import * as React from "react"
import * as styles from "./styles.module.scss"
import '../../sass/basics.scss'

import ServiceCard from "../ServiceCard"

const ServicesSection = () => {
  const cards = [
    { img: require("../../images/game_design.png").default, description: "CONSULTORIA DE DISEÑO DE VIDEOJUEGOS (GAME DESIGN)" },
    { img: require("../../images/art_design.png").default, description: "DESARROLLO DE ARTE Y DISEÑO GRÁFICO" },
    { img: require("../../images/development.png").default, description: "DESARROLLO DE VIDEOJUEGOS" },
    { img: require("../../images/gamification.png").default, description: "GAMIFICACIÓN DE PLATAFORMAS" },
  ]

  return (
    <div className={styles.background}>
      <div id="aboutUs" className={styles.container}>
        <h1 className={styles.title}>NUESTROS <b className={styles.highlight}>SERVICIOS</b></h1>
        <div className={styles.cardsContainer}>
          {
            cards.map((data, index) => <ServiceCard image={data.img} description={data.description} key={index} />)
          }
        </div>
      </div>
    </div>
  )
}

export default ServicesSection