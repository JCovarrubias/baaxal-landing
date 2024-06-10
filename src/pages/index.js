import * as React from "react"
import Container from "../components/container"
import Content from "../components/Content"
import Navbar from "../components/navbar"
import IntroSection from "../components/IntroSection"
import GamesSection from "../components/gamesSection"
import ServicesSection from "../components/ServicesSection"
import ProcessSection from "../components/ProcessSection"
import Footer from "../components/Footer"

const IndexPage = () => {
  return (
    <>
      <Container>
        <Content>
          <Navbar />
          <IntroSection />
          <GamesSection />
          <ServicesSection />
          <ProcessSection />
          <Footer />
        </Content>
      </Container>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Baaxal Games</title>
