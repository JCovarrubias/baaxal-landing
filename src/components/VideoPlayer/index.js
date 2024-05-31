import * as React from "react"
import * as styles from "./styles.module.scss"
import '../../sass/basics.scss'
import baaxalVideo from '../../videos/BaaxalCommercial.mp4'
// import express from 'express'

import Container from "../container"

const VideoPlayer = () => {

  return (
    <Container>
      <div className={styles.section}>
        {/* <div className={styles.background}></div> */}
        <video
          className={styles.videoPlayer}
          controls
        >
          <source src={baaxalVideo} type="video/mp4" />
          Tu navegador no soporta el elemento video.
        </video>
      </div>
    </Container>
  );
}

export default VideoPlayer;
