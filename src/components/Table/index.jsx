import { Link } from "react-router-dom";
import { AiFillEye } from "react-icons/ai"
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api"

import { Tr } from "../../components/Tr"


import { Container, TableContainer } from "./styles";


export function Table({ data = [] }) {
  // const { data } = api.get("/users/called")

  

  return (
    <Container>
      <TableContainer>
        <thead>
          <tr>
            <th></th>
            <th>ID</th>
            <th>Tipo</th>
            <th>Nome</th>
            <th>Idade</th>
            <th>RG</th>
            <th>Sexo</th>
            <th>Telefone</th>
            <th>Acompanhante</th>
            <th>Tel. Acompanhante</th>
            <th>data</th>
          </tr>
        </thead>

        <tbody>

          {data.map(data => (
            <Tr data={data} />
          ))}


         

        </tbody>
      </TableContainer>
    </Container>
  )
}