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
  const [datas, setDatas] = useState([])
  
  
  useEffect(()=>{
    async function handleFavorites(){
      const response = await api.get("/users/called");
      setDatas(response.data.called)
    }
    handleFavorites()

},[])
  return (
    <Container>
      <Header />
      <Section>
        <SearchBar />
        <Table data={datas} />
      </Section>
      <Footer />
    </Container>
  )
}