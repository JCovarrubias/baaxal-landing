import * as React from 'react';
import * as styles from './styles.module.scss'
import '../../sass/basics.scss'

import Baaxy from '../../images/baaxy.png'

const IntroSection = () => {
  
    return (
      <div className={styles.background}>
        <div className={styles.container}>
          <div className={styles.leftContainer}>
            <p className={styles.wellcomeLabel}>BIENVENIDO A BAAXAL GAMES</p>
            <p className={styles.slogan}>PIENSA, CREA, JUEGA</p>
          </div>
          <div className={styles.rightContainer}>
            <img src={Baaxy}></img>
          </div>
        </div>
      </div>
    )
  }
  
  export default IntroSection