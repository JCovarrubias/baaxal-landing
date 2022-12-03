import * as React from "react"
import * as styles from "./styles.module.scss"
import "../../sass/basics.scss"

import Container from "../container"

const TeamSection = () => {
  return (
    <Container>
    <div className={styles.section}>
      <div className={styles.details}>
        <h1 className={styles.title}>MEET THE TEAM</h1>
        <h4 className={styles.subtitle}>WE ARE CREATIVE PROFESSIONALS</h4>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
          Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis
          at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
        </p>
        <button className={styles.button}>VIEW MORE</button>
      </div>
      <div>
        <img className={styles.img} src={require("../../images/team.png").default} alt=""/>
      </div>
    </div>
    </Container>
  )
}

export default TeamSection