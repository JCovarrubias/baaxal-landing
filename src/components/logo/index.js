import * as React from "react"
import * as styles from "./styles.module.scss"
import "../../sass/basics.scss"
import logo from "../../images/baaxalLogo.png"

import Container from "../container"

const Logo = () => {
  return (
  <Container>
    <img className={styles.logo} src={logo} alt=""/>
  </Container>
  )
}

export default Logo