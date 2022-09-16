import { useState } from "react";

import { CardPreview } from "../../../components/CardPreview";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { Section } from "../../../components/Section";

import { api } from "../../../services/api";
import { Container } from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export function Edit() {
  const [data, setData] = useState({})
  const params = useParams()

  const navigate = useNavigate()


  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/called/${params.id}`)
      setData(response.data)
    }fetchNote()
   

  }, [])
  return (
    <Container>
      <Header/>
      <Section>
      <CardPreview data={data}/>

    

      </Section>

      <Footer />
    </Container>
  )
}