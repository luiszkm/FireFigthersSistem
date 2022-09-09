import { Container } from "./styles";
import { AiOutlineHeart, AiOutlinePlus, AiOutlineLine, AiFillHeart, AiOutlineEdit } from "react-icons/ai";
import { Button } from "../Button";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { Link } from "react-router-dom";

export function Card({ data }) {



  return (
    <Container>
      <Link to="/collaboratorProfile">
        <AiOutlineEdit
          size={25}
        />
      </Link>

      <img src="" alt="imagem do colaborador" />
      <h3>Nome do  Bombeiro</h3>
      <p>email@emial.com</p>
      <p>total chamados : 55</p>

    </Container>
  )
}