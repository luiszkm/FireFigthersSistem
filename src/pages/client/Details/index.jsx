import { Container } from "./styles";
import { CardPreview } from "../../../components/CardPreview"
import { Header } from "../../../components/Header"
import { Footer } from "../../../components/Footer"
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {api} from "../../../services/api"

export function Details() {
  const [data, setData] = useState({})
  const [dataAddress, setDataAddress] = useState({})
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/called/${params.id}`)
      setData(response.data)
    }
    fetchNote()
    async function fetchAddress(){
      const response = await api.get(`/addrees/${params.id}`)
      setDataAddress(response.data)
    }

  }, [])
  console.log(data);

  return (
    <Container>
      <Header />
      <CardPreview data={data} address={dataAddress}  />
      <Footer />
    </Container>
  )
}