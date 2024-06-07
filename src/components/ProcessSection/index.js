import * as React from 'react';
import * as styles from "./styles.module.scss"
import '../../sass/basics.scss'

import process from '../../images/Process.png'

const ProcessSection = () => {

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>NUESTRO <b className={styles.highlight}>PROCESO</b></h1>
      <div className={styles.process}>
        <img src={process} />
      </div>
    </div>
  )
}

export default ProcessSection