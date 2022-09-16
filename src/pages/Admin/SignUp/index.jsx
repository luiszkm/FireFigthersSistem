import { Link, useNavigate } from "react-router-dom";
import { useState } from "react"
import { useEffect } from "react";

import { api } from "../../../services/api";

import { Input } from "../../../components/Input";
import { Section } from "../../../components/Section";
import { Button } from "../../../components/Button";

import {GiWolfHead} from "react-icons/gi"

import { Container, Form } from "./styles";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSignUp(e) {
    e.preventDefault()
    if (!name || !email || !password) {
      alert("Preencha todos os campos!");
      return;
    }

    api.post("/users", {
      name,
      email,
      password
    }).then(() => {
      alert("Usuário cadastrado com sucesso!");
      navigate("/");
    })
    .catch(error => {
      if(error.response){
        alert(error.response.data.message);
      }else{
        alert("Não doi possível cadastrar")
      }
    })
  }

  return (
    <Container>
      <Header/>
      <Section title="Cadastre um Novo colaborador">
        <Form >
        <GiWolfHead size={55} />

          <Input name="nome"
            placeholder=" seu nome"
            onChange={event => setName(event.target.value)} />

          <Input name="email"
            placeholder="exemplo@exemplo.com"
            onChange={event => setEmail(event.target.value)} />

          <Input name="senha"
            type="password"
            placeholder="No mínimo 6 caracteres"
            onChange={event => setPassword(event.target.value)} />

          <Button title="Registrar"
            onClick={(e)=>handleSignUp(e)} />
         
        </Form>
      </Section>
      <Footer/>
    </Container>
  )
}