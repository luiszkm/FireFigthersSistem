import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { Section } from "../../../components/Section";
import { Card } from "../../../components/Card";
import { api } from "../../../services/api";
import { Container, Gallery } from "./styles";
import { useEffect } from "react";


export function Favorites() {


  useEffect(()=>{
    async function handleFavorites(){
      const response = await api.get("/favorites");

      console.log(response);
    }
    handleFavorites()

},[])
  return (
    <Container>
      <Header />
      <Section>
        <Gallery>
          <Card />
          <Card />
          <Card />
          <Card />
        </Gallery>
      </Section>
      <Footer />
    </Container>
  )
}