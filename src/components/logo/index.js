import * as React from "react"
import * as styles from "./styles.module.scss"
import "../../sass/basics.scss"
import logo from "../../images/baaxalLogo.png"
import { Link } from "gatsby"

import Container from "../container"

const Logo = () => {
  return (
  <Container>
    <Link to="/"><img className={styles.logo} src={logo} alt=""/></Link>
  </Container>
  )
}

export default Logo