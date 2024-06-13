import React, { useState, useEffect } from 'react'
import * as styles from "./styles.module.scss"
import "../../sass/basics.scss"

const ProcessCard = ({processImage, explanationImage, description}) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    console.log('Click')
    setExpanded(!expanded);
  };

  return (
    <div className={styles.card}>
      <img
        className={`${!expanded ? styles.fadeIn : styles.fadeOut}`}
        src={processImage}
        alt="process"
        onClick={handleClick} 
      />
      <img
        className={`${expanded ? styles.fadeIn : styles.fadeOut}`}
        src={explanationImage}
        alt="process"
        onClick={handleClick} 
      />
      <p className={`${styles.desc} ${expanded ? styles.expand : styles.collapse}`}>
        { description }
      </p>
    </div>
  )
}

export default ProcessCard