import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./styles.module.scss"
import '../../sass/basics.scss'

const NavbarButton = ({ text, linkTo }) => {
  return (
  <div className={styles.button}>
    <Link
      to={linkTo}
    >
      { text }
    </Link>
  </div>
  )
}

export default NavbarButton