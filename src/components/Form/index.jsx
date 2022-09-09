import React, { useEffect, useState } from 'react';
import { DivRow } from '../DivRow';

import { Form, InputStyle, Button, Container } from "./styles"
let teste = []

export function FormPage() {
  const [local, setLocal] = useState([])

 


  return (
    <Container>
      <Header />
      <Form  id="chamados">

        <select >
          <option value="Lojista ">Lojista </option>
          <option value=" Colaborador "> Colaborador </option>
          <option value=" Cliente"> Cliente</option>
          <option value=" Terceirizado"> Terceirizado</option>
        </select>

        <strong>Dados da vitima</strong>

        <InputStyle type="text" placeholder="Nome"  />

        <DivRow>
          <InputStyle type="number" placeholder="Idade"/>

          <label htmlFor="">
            M
            <InputStyle  type="radio" value="M" />
          </label>

          <label htmlFor="F">F
            <InputStyle  type="radio" value=" F" />
          </label>
        </DivRow>

        <DivRow>
          <InputStyle type="text" placeholder="Rg"  />
          <InputStyle type="text" placeholder="Tel" />
        </DivRow>

        <DivRow>
          <InputStyle type="text" placeholder="Rua"/>
          <InputStyle type="text" placeholder="Numero" />
        </DivRow>

        <DivRow>
          <InputStyle type="text" placeholder="Bairro" />
          <InputStyle type="text" placeholder="Cidade"/>
        </DivRow>


        <InputStyle type="text" placeholder="Nome Acompanhante" />
        <InputStyle type="number" placeholder="Tel Acompanhante" />

        <Grid title="CONTROLE DE TEMPO ATENDIMENTO">
          <Div title="Transmissão" id="transmission">
            <InputStyle id="transmission"
              type="datetime-local" placeholder="Transmissão"
            />
          </Div>

          <Div title="Chegada" id="arrival">
            <InputStyle
              type="datetime-local"
              placeholder="Chegada " />
          </Div>

          <Div title="Saida" id="exit">
            <InputStyle id='exit'
              type="datetime-local"
              placeholder="Saida" />
          </Div>

          <Div title="Liberação" id="release" >
            <InputStyle id='release'
              type="datetime-local" placeholder="Liberação"
             />
          </Div>
        </Grid>

        <DivRow>
          <InputStyle type="text" placeholder="1°PA" />
          <InputStyle type="time" placeholder="hora" />
          <InputStyle type="text" placeholder="2°PA"/>
          <InputStyle type="time" placeholder="hora-2"/>

        </DivRow>

        <DivRow>
          <InputStyle type="text" placeholder="Temperatura"  />
          <InputStyle type="text" placeholder="Pulso" />
          <InputStyle type="text" placeholder="SPO²%"  />

        </DivRow>

        <textarea />


        <Button type="submit" />
      </Form>

    </Container>

  );
}