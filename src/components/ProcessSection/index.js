import * as React from 'react';
import * as styles from "./styles.module.scss"
import '../../sass/basics.scss'

import ProcessCard from '../ProcessCard';

const ProcessSection = () => {
  const cards = [
    { img: require("../../images/discovery.png").default, description: "Revisamos el alcance del proyecto, exploramos diferentes estilos de arte y evaluamos los posibles riesgos" },
    { img: require("../../images/preproduction.png").default, description: "Nos sumergimos en el diseño del juego, creando conceptos detallados y definimos niveles. Desarrollamos las características principales del juego y elaboramos un plan detallado para su implementación." },
    { img: require("../../images/production.png").default, description: "Nuestros artistas trabajan en la producción de arte, mientras que nuestros programadores implementan las características diseñadas en la etapa de preproducción." },
    { img: require("../../images/bug_fixing.png").default, description: "Nos enfocamos en la optimización y el pulido del juego. Realizamos ajustes finales en la jugabilidad, los gráficos y el rendimiento." },
  ]

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>NUESTRO <b className={styles.highlight}>PROCESO</b></h1>
      <div className={styles.cardsContainer}>
        {
          cards.map((data, index) => <ProcessCard image={data.img} description={data.description} key={index} />)
        }
      </div>
    </div>
  )
}

export default ProcessSection