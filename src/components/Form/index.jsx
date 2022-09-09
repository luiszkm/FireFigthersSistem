import React, { useEffect, useState } from 'react';
import { Input } from '../Input';
import { Textarea } from '../TextArea';

import { Form, Container, DivRow, Div, Grid } from "./styles"
let teste = []

export function FormPage() {
  const [local, setLocal] = useState([])


  return (
    <Container>
      <Form id="chamados">
        <select >
          <option value="Lojista ">Lojista </option>
          <option value=" Colaborador "> Colaborador </option>
          <option value=" Cliente"> Cliente</option>
          <option value=" Terceirizado"> Terceirizado</option>
        </select>

        <strong>Dados da vitima</strong>

        <Input type="text" placeholder="Nome" />

        <DivRow>
          <Input type="number" placeholder="Idade" />

          <label htmlFor="">
            M
            <Input type="radio" value="M" />
          </label>

          <label htmlFor="F">F
            <Input type="radio" value=" F" />
          </label>
        </DivRow>

        <Div>
          <Input type="text" placeholder="Rg" />
          <Input type="text" placeholder="Tel" />
        </Div>

        <Div>
          <Input type="text" placeholder="Rua" />
          <Input type="text" placeholder="Numero" />
        </Div>

        <Div>
          <Input type="text" placeholder="Bairro" />
          <Input type="text" placeholder="Cidade" />
        </Div>


        <Input type="text" placeholder="Nome Acompanhante" />
        <Input type="number" placeholder="Tel Acompanhante" />

        <Grid >
          <Input id="transmission"
            type="datetime-local" placeholder="Transmissão" />
          <Input type="datetime-local"
            placeholder="Chegada " />
          <Input id='exit'
            type="datetime-local"
            placeholder="Saida" />
          <Input id='release'
            type="datetime-local" placeholder="Liberação" />
        </Grid>

        <Grid>
          <Input type="text" placeholder="1°PA" />
          <Input type="time" placeholder="hora" />
          <Input type="text" placeholder="2°PA" />
          <Input type="time" placeholder="hora-2" />
        </Grid>

        <Grid>
          <Input type="text" placeholder="Temperatura" />
          <Input type="text" placeholder="Pulso" />
          <Input type="text" placeholder="SPO²%" />
        </Grid>

        <Textarea />
      </Form>

    </Container>

  );
}