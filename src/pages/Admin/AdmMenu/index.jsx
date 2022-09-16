import { useState } from "react";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { Section } from "../../../components/Section";
import { Table } from "../../../components/Table";

import { Container, Form } from "./styles";

import { useNavigate } from 'react-router-dom';
import { api } from "../../../services/api";
import { useEffect } from "react";



export function AdmMenu() {

  const [datas, setDatas] = useState([])

  useEffect(()=>{
    async function handleAllCalled(){
      const response = await api.get("/adm/called");
      setDatas(response.data.called)
    }
    handleAllCalled()

  },[])
 
  return (
    <Container>
      <Header />
      <Section title="Todos os Chamados">
      <Table data={datas} />

      </Section>


      <Footer />
    </Container>
  )
}