import * as React from "react"
import * as styles from "./styles.module.scss"
import '../../sass/basics.scss'

const NavbarContainer = ({children}) => {
  return (
  <div className={styles.container}>
    {children}
  </div>
  )
}

export default NavbarContainer