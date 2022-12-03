import * as React from "react"
import * as styles from "./styles.module.scss"
import '../../sass/basics.scss'

import Container from "../container"
import NavbarButton from "../navbarButton"

const Navbar = () => {
  const buttons = [
    { name: 'HOME', linkTo: '#home' },
    { name: 'GAMES', linkTo: '#games' },
    { name: 'ABOUT US', linkTo: '#aboutUs' },
    { name: 'MEET THE TEAM', linkTo: '#team' },
  ]

  return (
    <div className={styles.navbar}>
      <Container>
        {
          buttons.map((data, index) => <NavbarButton text={data.name} linkTo={data.linkTo} key={index} />)
        }
      </Container>
    </div>
  )
}

export default Navbar