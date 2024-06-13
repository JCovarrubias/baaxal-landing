import * as React from 'react';
import * as styles from './styles.module.scss'
import '../../sass/basics.scss'

import Team from '../../images/team.png'

const AboutUsSection = () => {
  
  return (
    <div id='about-us' className={styles.background}>
      <div  className={styles.container}>
        <div className={styles.leftContainer}>
          <h1 className={styles.title}>NOSOTROS</h1>
          <p>
            <b>
              Somos una empresa de videojuegos con sede en la Ciudad de México y oficina en San Luis Potosí. Aunque nuestra presencia en el mercado inició a finales de 2022, nuestra trayectoria como desarrolladores de juegos para dispositivos móviles se remonta a varios años atrás.
            </b>
          </p>
          <p>
            <b>
              Nuestro propósito es crear grandes juegos que brinden a las personas experiencias memorables y gratificantes en su día a día. Creemos en el poder de los videojuegos para unir a personas de todo el mundo, y trabajamos con pasión para diseñar experiencias que emocionen y diviertan a los jugadores.
            </b>
          </p>
          <p>
            <b>
              Valoramos la gamificación como una herramienta poderosa para involucrar a los usuarios en el logro de metas y objetivos. Nos gusta colaborar con empresas que buscan integrar los videojuegos en sus estrategias de negocio, y ofrecemos soluciones de gamificación personalizadas que potencian el engagement y la satisfacción de los usuarios.
            </b>
          </p>
          <p>
            <b>
              En resumen, somos un estudio de videojuegos comprometido con la excelencia y la innovación en la creación de juegos que conecten con el público y ofrezcan experiencias únicas e inolvidables.
            </b>
          </p>
        </div>
        <div className={styles.rightContainer}>
          <img src={Team}></img>
        </div>
      </div>
    </div>
  )
}
  
export default AboutUsSection