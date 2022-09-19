import { Footer } from "../../../components/Footer"
import { Header } from "../../../components/Header"
import { Card } from "../../../components/Card"

import  avatarPlaceholder from "../../../assets/avatar_placeholder.svg";

import { Container, Main } from "./styles"
import { api } from "../../../services/api"
import { useAuth } from "../../../hooks/auth"
import { useEffect } from "react"
import { useState } from "react"

export function Adm() {
  const { user } = useAuth();
  const [data , setData] = useState([])
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;


  useEffect(()=>{
    async function fetchUsers(){
      const response = await api.get("/adm")

      setData(response.data.users)

    }fetchUsers()
  },[])
  return (
    <Container>
      <Header />
      <Main>
        {
          data.map(data=>(
            <Card data={data} />
          ))
        }
      </Main>
      <Footer />
    </Container>
  )
}