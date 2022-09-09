import { useState } from "react";

import { CardPreview } from "../../../components/CardPreview";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { Section } from "../../../components/Section";
import { Input } from "../../../components/Input";

import { Container } from "./styles";

export function Edit() {
  const []= useState()
  return (
    <Container>
      <Header/>
      <Section>
      <CardPreview />

    

      </Section>

      <Footer />
    </Container>
  )
}