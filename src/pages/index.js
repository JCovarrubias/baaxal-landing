import * as React from "react"
import Container from "../components/container"
import Content from "../components/Content"
import Navbar from "../components/navbar"
import VideoPlayer from "../components/VideoPlayer"
import GamesSection from "../components/gamesSection"
import AboutUsSection from "../components/AboutUsSection"
import ProcessSection from "../components/ProcessSection"
import Footer from "../components/Footer"

const IndexPage = () => {
  return (
    <>
      <Container>
        <Content>
          <Navbar />
          <VideoPlayer />
          <GamesSection />
          <AboutUsSection />
          <ProcessSection />
          <Footer />
        </Content>
      </Container>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Baaxal Games</title>
