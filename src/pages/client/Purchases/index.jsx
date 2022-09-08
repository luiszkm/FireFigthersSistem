

import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { Section } from "../../../components/Section";
import { Table } from "../../../components/Table";

import { Container } from "./styles";

export function Purchases(){

  return(
    <Container>
      <Header />
      
      <Section title="Pedidos">
      <Table />
        
      </Section>
      
      <Footer />
    </Container>
  )
}