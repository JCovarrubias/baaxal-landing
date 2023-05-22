import * as React from "react"
import Container from "../components/container"
import PrivacyPolicy from "../components/PrivacyPolicy"
import Background from "../components/Background"
import Content from "../components/Content"
import Logo from "../components/logo"
import Footer from "../components/Footer"

const PrivacyPolicyPage = () => {
  return (
    <>
      <Container>
        <Background />
        <Content>
          <Logo />
          <PrivacyPolicy />
          <Footer />
        </Content>
      </Container>
    </>
  )
}

export default PrivacyPolicyPage

export const Head = () => <title>Baaxal Games</title>
