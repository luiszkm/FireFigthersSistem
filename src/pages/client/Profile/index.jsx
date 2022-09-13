import { useState } from "react";

import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { Section } from "../../../components/Section";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";

import { useAuth } from "../../../hooks/auth";
import { api } from "../../../services/api";

import  avatarPlaceholder from "../../../assets/avatar_placeholder.svg";
import { Container, Form, Avatar } from "./styles";
import { Link } from "react-router-dom";

import { AiOutlineCamera } from "react-icons/ai"

export function Profile() {
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const [passwordNew, setPasswordNew] = useState();
  const [passwordOld, setPasswordOld] = useState();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  
  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleUpdate() {
    const user = {
      password: passwordNew,
      old_password: passwordOld,
    }
    await updateProfile({user, avatarFile})

  }
  console.log(avatarFile);
  async function handleChangeAvatar(event){
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)

  }

  return (
    <Container>
      <Header />
      <Section>
        <Avatar>
          <img src={avatar}
            alt={`foto do ${name}`} />

          <label htmlFor="avatar">
            <AiOutlineCamera />

            <input
              type="file"
              id="avatar"
              className="sr-only"
              onChange={handleChangeAvatar}
            />
          </label>
        </Avatar>
  
        <Form>
          <Input placeholder="Nome"
            value={user.name}
            readOnly 
            onChange={e => setName(e.target.value)}
          />
          <Input placeholder="Email"
            value={user.email}
            readOnly 

            onChange={e => setEmail(e.target.value)}
          />
          <Input
            placeholder="Senha Atual"
            type= "password"
            onChange={e => setPasswordOld(e.target.value)}
          />

          <Input placeholder="Nova Senha"
          type= "password"
            onChange={e => setPasswordNew(e.target.value)}
          />

          <Button title="Salvar"
          onClick={handleUpdate} />

        </Form>
      </Section>
      <Footer />
    </Container>
  )
}