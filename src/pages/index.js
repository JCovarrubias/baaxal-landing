import * as React from "react"
import Container from "../components/container"
import Content from "../components/Content"
import Background from "../components/Background"
import Navbar from "../components/navbar"
import Logo from "../components/logo"
import VideoPlayer from "../components/VideoPlayer"
import GamesSection from "../components/gamesSection"
import AboutUsSection from "../components/AboutUsSection"
import TeamSection from "../components/TeamSection"
import Footer from "../components/Footer"

const IndexPage = () => {
  return (
    <>
      <Container>
        <Background />
        <Content>
          <Navbar />
          <Logo />
          <VideoPlayer />
          <GamesSection />
          <AboutUsSection />
          <TeamSection />
          <Footer />
        </Content>
      </Container>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Baaxal Games</title>
