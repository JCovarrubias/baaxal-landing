import * as React from "react"
import * as styles from "./styles.module.scss"
import '../../sass/basics.scss'
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
          <source src="https://drive.google.com/uc?export=download&id=1mUX56QZL7M4B0kVTitNoIcqrx3dnNJBE" type="video/mp4" />
          Tu navegador no soporta el elemento video.
        </video>
      </div>
    </Container>
  );
}

export default VideoPlayer;
