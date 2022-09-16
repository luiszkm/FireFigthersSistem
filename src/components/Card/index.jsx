import { Container } from "./styles";
import { AiOutlineHeart, AiOutlinePlus, AiOutlineLine, AiFillHeart, AiOutlineEdit } from "react-icons/ai";
import { Button } from "../Button";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";


import  avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export function Card({ data ={} }) {
const avatarUrl = data.avatar ? `${api.defaults.baseURL}/files/${data.avatar}` : avatarPlaceholder

const navigate = useNavigate()


  function handleCollaboratorProfile(id){
    navigate(`collaboratorProfile/${id}`)

  }

  return (
    <Container>
  
        <AiOutlineEdit
          size={25}
          onClick={()=>handleCollaboratorProfile(data.id)}
        />

      <img src={avatarUrl } 
      alt="imagem do colaborador" />
      <h3>{data.name}</h3>
      <p>{data.email}</p>
      <p>total chamados : 55</p>

    </Container>
  )
}