import { Container } from "./styles";
import { AiOutlineHeart, AiOutlinePlus, AiOutlineLine, AiFillHeart, AiOutlineEdit } from "react-icons/ai";
import { Button } from "../Button";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { Link } from "react-router-dom";
import { api } from "../../services/api";


import  avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export function Card({ data ={} }) {
const avatarUrl = data.avatar ? `${api.defaults.baseURL}/files/${data.avatar}` : avatarPlaceholder



  return (
    <Container>
      <Link to="/collaboratorProfile">
        <AiOutlineEdit
          size={25}
        />
      </Link>

      <img src={avatarUrl } 
      alt="imagem do colaborador" />
      <h3>{data.name}</h3>
      <p>{data.email}</p>
      <p>total chamados : 55</p>

    </Container>
  )
}