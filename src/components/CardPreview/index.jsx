import { Container, Div, DivRow } from "./styles";
import { AiOutlineHeart, AiOutlinePlus, AiOutlineLine } from "react-icons/ai";
import { Button } from "../Button";
import { Section } from "../Section";
import { useState } from "react";
import { useEffect } from "react";


export function CardPreview({ data = {} }) {
  const [traumas, setTraumas] = useState( data.traumas)

  var a = traumas.forEach(a=>{
    console.log(a);
  })
  
  useEffect(() => {
    setTraumas(data.traumas)

   
  }, [])

  return (
    <Container>
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
              <span>Sala de atendimento: 15:20</span>
              <span>liberação: 15:30</span>
            </DivRow>

            <span>Medicamentos usado pela vitima: {data.medicines}</span>
            <DivRow>
              <strong>Traumas:</strong>
                  {
                  
                  }
            </DivRow>
            <DivRow>

              <strong>Clínico:</strong>
              <span>Convulsão</span>
            </DivRow>
            <DivRow>
              <strong>Lesões:</strong>
              <span>Queimadura- Face</span>
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

            <DivRow>
              <strong>Procedimentos:</strong>
              <span>Cadeira de Rodas</span>
            </DivRow>
            <DivRow>
              <strong>Material Usado:</strong>
              <span>Luva (5)</span>
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