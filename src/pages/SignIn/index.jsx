import { useState } from "react";
import { Link } from "react-router-dom"

import { useAuth } from "../../hooks/auth"

import { Input } from "../../components/Input";
import { Logo } from "../../components/Logo";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";

import { Container, Form } from "./styles";
import { Footer } from "../../components/Footer";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const { signIn } = useAuth()

  function handleSignIn(e) {
    e.preventDefault()
    signIn({email, password})
  }


  return (
    <Container>
      <Logo title="Sistema de Ocorrências" className="main-logo" />
      <Section title=" Faça Login" back={false}>

        <Form >
          <Input name="E-mail"
            placeholder="exemplo@exemplo.com"
            onChange={e => setEmail(e.target.value)} />

          <Input name="Senha"
            type="password"
            placeholder="No mínimo 6 caracteres"
            onChange={e => setPassword(e.target.value)} />

          <Button title=" Entrar"
            onClick={handleSignIn} />

        </Form>
      </Section>

    </Container>
  )
}