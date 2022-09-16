import { useEffect, useState } from "react";

import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { Section } from "../../../components/Section";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";

import { useAuth } from "../../../hooks/auth";
import { api } from "../../../services/api";

import avatarPlaceholder from "../../../assets/avatar_placeholder.svg";
import { Container, Form, Avatar } from "./styles";
import { Link, useNavigate, useParams } from "react-router-dom";

import { AiOutlineCamera } from "react-icons/ai"

export function CollaboratorProfile() {

  const [userData, setUserData] = useState({})

  const avatarUrl = userData.avatar ? `${api.defaults.baseURL}/files/${userData.avatar}` : avatarPlaceholder

  const [name, setName] = useState(userData.name);
  const [email, setEmail] = useState(userData.email);
  console.log(name);

  const [password, setPassword] = useState('');

  const params = useParams()
  const navigate = useNavigate()
  async function handleUpdateCollaborator(e) {
    e.preventDefault()

    try {
      await api.put(`/adm/userUpdate/${userData.id}`, {
       password, name, email
      })
      alert("Perfil atualizado com sucesso!")
      navigate('/')
    } catch (error) {
      console.error(error)
      alert("Não foi possível atualizar este perfil")
    }


  }

  useEffect(() => {
    async function fetchUser() {
      const response = await api.get(`/adm/${params.id}`)
      setUserData(response.data)
      setName(response.data.name)
      setEmail(response.data.email)
    } fetchUser()

  }, [])
  return (
    <Container>
      <Header />
      <Section>
        <Avatar>
          <img src={avatarUrl}
            alt={`foto do ${userData.name}`} />
          <strong>Id: {userData.id}</strong>
        </Avatar>

        <Form>
          <Input placeholder="Nome"
            value={name}
            
            onChange={e => setName(e.target.value)}
          />
          <Input placeholder="Email"
            value={email}
            

            onChange={e => setEmail(e.target.value)}
          />

          <Input placeholder="Nova Senha"
            type="password"
            onChange={e => setPassword(e.target.value)}
          />

          <Button title="Salvar"
            onClick={(e) => handleUpdateCollaborator(e)}
          />

        </Form>
      </Section>
      <Footer />
    </Container>
  )
}