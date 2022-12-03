import * as React from "react"
import * as styles from "./styles.module.scss"
import '../../sass/basics.scss'

import Container from "../container"
import AboutUsCard from "../AboutUsCard"

const AboutUsSection = () => {
  const cards = [
    { img: require("../../images/toad.jpg").default, description: "Lorem ipsum dolor sit amet, consectetuer" },
    { img: require("../../images/toad.jpg").default, description: "Lorem ipsum dolor sit amet, consectetuer" },
    { img: require("../../images/toad.jpg").default, description: "Lorem ipsum dolor sit amet, consectetuer" },
  ]

  return (
    <div id="aboutUs" className={styles.container}>
      <h1 className={styles.title}>ABOUT US</h1>
      <Container>
        {
          cards.map((data, index) => <AboutUsCard image={data.img} description={data.description} key={index} />)
        }
      </Container>
    </div>
  )
}

export default AboutUsSection