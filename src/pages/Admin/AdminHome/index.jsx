import { Footer } from "../../../components/Footer"
import { Header } from "../../../components/Header"
import { Section } from "../../../components/Section"
import { Card } from "../../../components/Card"
import { Carousel } from "../../../components/Carousel"

import  avatarPlaceholder from "../../../assets/avatar_placeholder.svg";

import { Container, Main } from "./styles"
import { Table } from "../../../components/Table"
import { api } from "../../../services/api"
import { useAuth } from "../../../hooks/auth"

export function Adm() {
  const { user } = useAuth();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  return (
    <Container>
      <Header />
      <Main>
        <Card data={avatarUrl} />
       
      </Main>
      <Footer />
    </Container>
  )
}