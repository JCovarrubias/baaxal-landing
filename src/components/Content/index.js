import * as React from "react"
import * as styles from "./styles.module.scss"
import '../../sass/basics.scss'

const Content = ({children}) => {
  return (
  <div className={styles.content}>
    {children}
  </div>
  )
}

export default Content