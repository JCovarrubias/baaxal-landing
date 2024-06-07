import React, { useState, useEffect } from "react"
import * as styles from "./styles.module.scss"
import '../../sass/basics.scss'
import logo from '../../images/baaxalVerticalLogo.png'

import NavbarContainer from "../NavbarContainer"
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
    { name: 'HOME', linkTo: '/' },
    { name: 'ABOUT US', linkTo: '/about-us' },
  ]

  return (
    <div className={styles.navbar}>
      <NavbarContainer>
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
        </div>
        <div className={styles.buttonsAlignment}>
          {isMobile && <MobileMenu buttons={ buttons }/> }
          {
            !isMobile && buttons.map((data, index) => <NavbarButton text={data.name} linkTo={data.linkTo} key={index} />)
          }
        </div>
      </NavbarContainer>
    </div>
  )
}

export default Navbar