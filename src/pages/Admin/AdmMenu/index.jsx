import { useState } from "react";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { Section } from "../../../components/Section";
import { Table } from "../../../components/Table";

import { Container, Form } from "./styles";

import { useNavigate } from 'react-router-dom';
import { api } from "../../../services/api";



export function AdmMenu() {

 
  return (
    <Container>
      <Header />
      <Section title="Todos os Chamados">
      <Table />

      </Section>


      <Footer />
    </Container>
  )
}