import { Footer } from "../../../components/Footer"
import { Header } from "../../../components/Header"
import { Section } from "../../../components/Section"
import { Card } from "../../../components/Card"
import { Carousel } from "../../../components/Carousel"


import { Container, Main } from "./styles"
import { FormPage } from "../../../components/Form"


export function Home() {

  return (
    <Container>
      <Header />
    <FormPage />
      <Footer  />
    </Container>
  )
}