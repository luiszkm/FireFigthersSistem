import { useState } from "react";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { Section } from "../../../components/Section";
import { Table } from "../../../components/Table";

import { Container, Form } from "./styles";

import { useNavigate } from 'react-router-dom';
import { api } from "../../../services/api";
import { useEffect } from "react";
import { SearchBar } from "../../../components/SearchBar";



export function AdmMenu() {

  const [datas, setDatas] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    async function handleAllCalled() {
      const response = await api.get("/adm/called");
      setDatas(response.data.called)
    }
    handleAllCalled()

  }, [])
  useEffect(() => {
    async function fetchCalledFiltered() {
      const response = await api.get(`/adm/search?victim_name=${search}`)
      setDatas(response.data)
    }
    fetchCalledFiltered()
  },
    [search])

  return (
    <Container>
      <Header />
      <Section title="Todos os Chamados">
        <SearchBar onChange={e => setSearch(e.target.value)} />
        <Table data={datas} />
      </Section>
      <Footer />
    </Container>
  )
}