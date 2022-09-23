import { Container, Div, DivRow } from "./styles";
import { AiOutlineHeart, AiOutlinePlus, AiOutlineLine } from "react-icons/ai";
import { Button } from "../Button";
import { Section } from "../Section";
import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import { api } from "../../services/api";

import { AiOutlineDelete } from "react-icons/ai"
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";


export function CardPreview({ data }) {
  const { admin } = useAuth()

  const navigate = useNavigate()

  async function handleDeleteCalled(id) {
    const isOk = window.confirm('Deseja realmente deletar este chamado?')
    if (isOk) {
      try {
        await api.delete(`/called/${id}`)
        alert('Chamado deletado com sucesso!')
        navigate('/administrator')
      } catch (error) {
        alert("Não foi possível deletar!")
      }
    }

  }



  return (
    <Container>
      {admin ? <AiOutlineDelete size={30} color="red"
        onClick={() => handleDeleteCalled(data.id)} /> : ''}
      <h4>Responsável: {data.user_name}  <strong>data: {data.created_at}</strong></h4>

      <div>
        <Section title="Dados da Vitima"
          back={false}>
          <Div>
            <span> <strong>tipo: </strong>
              {data.type}
            </span>
            <DivRow>
              <span><strong>Nome: </strong>
                {data.victim_name}
              </span>
              <span> <strong>Idade: </strong>
                {data.age} anos</span>
            </DivRow>

            <span><strong>Rg: </strong>
              {data.rg}</span>
            <DivRow>
              <span><strong>Sexo: </strong> {data.sexo} </span>
              <span><strong>Tel:</strong> {data.phone}</span>
            </DivRow>
            <DivRow>
              <span><strong>Rua: </strong>{data.street} </span>
              <span><strong>N°: </strong>{data.number}</span>
            </DivRow>
            <DivRow>
              <span><strong>Bairro: </strong> {data.district}</span>
              <span><strong>Cidade: </strong> {data.city}</span>
            </DivRow>
            <span><strong>Acompanhante: </strong> {data.escortName}</span>
            <span><strong>Tel. acompanhante: </strong> {data.escortPhone}</span>
          </Div>

        </Section>

        <Section title="Controle de Atendimento"
          back={false}>
          <Div>
            <DivRow>
              <strong>Transmissão:
                <span>{data.transmission || ' -/-'}</span>
              </strong>
              <strong>Chegada:
                <span>{data.coming || " -/-"}</span>
              </strong>
            </DivRow>

            <DivRow>
              <strong>Saída:
                <span>{data.exit || ' -/-'}</span>
              </strong>
              <strong>Liberação:
                <span>{data.release || " -/-"}</span>
              </strong>
            </DivRow>

            <span>Medicamentos usado pela vitima: {data.medicines}</span>
            <DivRow>
              <strong>Traumas:</strong>
              {data.traumas &&
                data.traumas.map(trauma => (
                  <span key={trauma.id}>- {trauma.traumas_name}</span>
                ))
              }
            </DivRow>

            <DivRow>

              <strong>Clínico:</strong>
              {
                data.clinical &&
                data.clinical.map(clinic => (
                  <span key={clinic.id}>- {clinic.clinical_name}</span>

                ))
              }
            </DivRow>
            <DivRow>
              <strong>Lesões:</strong>
              {
                data.wound &&
                data.wound.map(wound => (
                  <span key={wound.id}>- {wound.wound_name}</span>
                ))
              }
            </DivRow>
            <DivRow>
              <strong>1°PA:
                <span>{data.pa1}</span>
              </strong>
              <strong>Hora:
                <span>{data.timePa1}</span>
              </strong>
            </DivRow>
            <DivRow>
              <strong>2°PA:
                <span>{data.pa1 || ' -/-'}</span>
              </strong>
              <strong>Hora:
                <span>{data.timePa2 || " -/-"}</span>
              </strong>
            </DivRow>

          </Div>
        </Section>

        <Section title="Procedimentos"
          back={false}>

          <Div>
            <strong>Temperatura:
              <span>{data.temperature}</span>
            </strong>

            <DivRow>
              <strong>Pulso:
                <span>{data.pulse}</span>
              </strong>

              <strong>SPO²%:
                <span>{data.spo2}</span>
              </strong>
            </DivRow>

            <Div>
              <strong>Procedimentos Efetuados:</strong>
              {
                data.procedures &&
                data.procedures.map(procedure => (
                  <span key={procedure.id}>- {procedure.procedures_name}</span>
                ))
              }

            </Div>
            <DivRow>
              <strong>Material Usado:</strong>
              {
                data.materials &&
                data.materials.map(material => (
                  <span key={material.id}>{material.material_name}</span>
                ))
              }
            </DivRow>
            <DivRow>
              <strong>Destino :</strong>
              <span>{data.victim_destiny}</span>
            </DivRow>
            <Div>
              <strong>Procedimentos Detalhados:</strong>
              <p>{data.descriptions}</p>
            </Div>

          </Div>
        </Section>
      </div>
    </Container>
  )
}