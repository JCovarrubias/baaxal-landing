import * as React from "react"
import * as styles from "./styles.module.scss"
import "../../sass/basics.scss"

import Container from "../container"

const TeamSection = () => {
  return (
    <Container>
    <div className={styles.section} id="team">
      <div className={styles.details}>
        <h1 className={styles.title}>CONOCE AL EQUIPO</h1>
        <p className={styles.desc}>
        Somos una empresa de videojuegos con sede en la Ciudad de México y oficina en San Luis Potosí. Aunque nuestra presencia en el mercado inició a finales de 2022, nuestra trayectoria como desarrolladores de juegos para dispositivos móviles se remonta a varios años atrás.<br/><br/>
        Nuestro propósito es crear grandes juegos que brinden a las personas experiencias memorables y gratificantes en su día a día. Creemos en el poder de los videojuegos para unir a personas de todo el mundo, y trabajamos con pasión para diseñar experiencias que emocionen y diviertan a los jugadores.<br/><br/>
        Valoramos la gamificación como una herramienta poderosa para involucrar a los usuarios en el logro de metas y objetivos. Nos gusta colaborar con empresas que buscan integrar los videojuegos en sus estrategias de negocio, y ofrecemos soluciones de gamificación personalizadas que potencian el engagement y la satisfacción de los usuarios.<br/><br/>
        En resumen, somos un estudio de videojuegos comprometido con la excelencia y la innovación en la creación de juegos que conecten con el público y ofrezcan experiencias únicas e inolvidables.
        </p>
      </div>
      <div>
        <img className={styles.img} src={require("../../images/team.png").default} alt=""/>
      </div>
    </div>
    </Container>
  )
}

export default TeamSection