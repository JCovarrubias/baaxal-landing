import * as React from "react"
import * as styles from "./styles.module.scss"
import '../../sass/basics.scss'

import AboutUsCard from "../AboutUsCard"

const AboutUsSection = () => {
  const cards = [
    { img: require("../../images/games.png").default, description: "Creamos juegos móviles atractivos y adictivos." },
    { img: require("../../images/experience.png").default, description: "Mejoramos la experiencia del usuario y aumentamos el engagement en plataformas digitales existentes mediante soluciones de gamificación personalizadas." },
    { img: require("../../images/development.png").default, description: "Desarrollamos plataformas móviles con gamificación desde cero para ofrecer experiencias de juego únicas y atractivas." },
    { img: require("../../images/interactive.png").default, description: "Creamos experiencias de juego interactivas y memorables para mejorar el engagement y la fidelización del público objetivo." },
  ]

  return (
    <div id="aboutUs" className={styles.container}>
      <h1 className={styles.title}>SOLUCIONES</h1>
      <div className={styles.cardsContainer}>
        {
          cards.map((data, index) => <AboutUsCard image={data.img} description={data.description} key={index} />)
        }
      </div>
    </div>
  )
}

export default AboutUsSection