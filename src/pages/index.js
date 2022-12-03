import * as React from "react"
import Navbar from "../components/navbar"
import Logo from "../components/logo"
import GamesSection from "../components/gamesSection"
import AboutUsSection from "../components/AboutUsSection"
import TeamSection from "../components/TeamSection"

const IndexPage = () => {
  return (
    <>
      <Navbar />
      <Logo />
      <GamesSection />
      <AboutUsSection />
      <TeamSection />
    </>
  )
}

export default IndexPage

export const Head = () => <title>Baaxal Games</title>
