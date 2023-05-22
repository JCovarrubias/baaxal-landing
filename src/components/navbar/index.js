import React, { useState, useEffect } from "react"
import * as styles from "./styles.module.scss"
import '../../sass/basics.scss'

import Container from "../container"
import NavbarButton from "../navbarButton"
import MobileMenu from "../MobileMenu"

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Check on initial render

    window.addEventListener('resize', handleResize); // Add event listener for resize

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up the event listener on component unmount
    };
  }, []);

  const buttons = [
    { name: 'HOME', linkTo: '#home' },
    { name: 'GAMES', linkTo: '#games' },
    { name: 'SOLUCIONES', linkTo: '#aboutUs' },
    { name: 'EL EQUIPO', linkTo: '#team' },
  ]

  return (
    <>
      {isMobile && <MobileMenu buttons={ buttons }/> }
      <div className={styles.navbar}>
        <Container>
          {
            !isMobile && buttons.map((data, index) => <NavbarButton text={data.name} linkTo={data.linkTo} key={index} />)
          }
        </Container>
      </div>
    </>
  )
}

export default Navbar