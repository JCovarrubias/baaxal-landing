import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./styles.module.scss"
import '../../sass/basics.scss'

import Container from "../container"

const Footer = () => {
  const socialMedia = [
    { img: require("../../images/facebookIcon.png").default },
    { img: require("../../images/linkedinIcon.png").default },
  ]

  return (
    <div id="footer" className={styles.container}>
      <Link to="/privacyPolicy" className={styles.link}><p className={styles.title}>Politicas de Privacidad</p></Link>
      <div className={styles.socialMedia}>
        <Container>
          {
            socialMedia.map((data, index) => <img className={styles.img} src={data.img} key={index} alt=""/>)
          }
        </Container>
      </div>
    </div>
  )
}

export default Footer