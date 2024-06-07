import * as React from "react"
import Container from "../components/container"
import PrivacyPolicy from "../components/PrivacyPolicy"
import Background from "../components/Background"
import Content from "../components/Content"
import Footer from "../components/Footer"

const PrivacyPolicyPage = () => {
  return (
    <>
      <Container>
        <Content>
          <PrivacyPolicy />
          <Footer />
        </Content>
      </Container>
    </>
  )
}

export default PrivacyPolicyPage

export const Head = () => <title>Baaxal Games - Privacy Policy</title>
