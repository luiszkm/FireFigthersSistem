import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { Section } from "../../../components/Section";
import { Card } from "../../../components/Card";
import { api } from "../../../services/api";
import { Container } from "./styles";
import { useEffect, useState } from "react";
import { Table } from "../../../components/Table";
import { SearchBar } from "../../../components/SearchBar";


export function Favorites() {
  const [datas, setDatas] = useState([]);
  const [search, setSearch] = useState('');
  


  useEffect(()=>{
    async function fetchCalled(){
      const response = await api.get("/users/called");
      setDatas(response.data.called)
    }
    fetchCalled()

},[])

useEffect(() => {
  async function  fetchCalledFiltered() {
    const response = await api.get(`/called?victim_name=${search}`)
    console.log(response.data);
    setDatas(response.data)
  }
  fetchCalledFiltered()
},
[search])
  return (
    <Container>
      <Header />
      <Section>
        <SearchBar
        onChange ={e=> setSearch(e.target.value)} />
        <Table data={datas} />
      </Section>
      <Footer />
    </Container>
  )
}