import { Footer } from "../../../components/Footer"
import { Header } from "../../../components/Header"
import { Section } from "../../../components/Section"
import { Card } from "../../../components/Card"


import { Container, Main } from "./styles"
import { FormPage } from "../../../components/Form"
import { useEffect } from "react"
import {useAuth} from "../../../hooks/auth"

export function Home() {
  const { fetchUserCalled } = useAuth()

  useEffect (() => {

  })
  return (
    <Container>
      <Header />
    <FormPage />
      <Footer  />
    </Container>
  )
}