import { Container, Div, DivRow } from "./styles";
import { AiOutlineHeart, AiOutlinePlus, AiOutlineLine } from "react-icons/ai";
import { Button } from "../Button";
import { Section } from "../Section";


export function CardPreview({ data ={} , address}) {




  return (
    <Container>
      <h4>Responsável: {data.user_name}  <strong>data: {data.created_at}</strong></h4>

      <div>
        <Section title="Dados da Vitima">
          <Div>
            <span>{data.type}</span>
            <DivRow>
              <span>Nome: {data.victim_name} </span>
              <span>{data.age} anos</span>
            </DivRow>

            <span>Rg:{data.rg}</span>
            <DivRow>
              <span>Sexo: {data.sexo} </span>
              <span>Tel: {data.phone}</span>
            </DivRow>
            <DivRow>
              <span>Rua:{address.street} </span>
              <span>N° 555</span>
            </DivRow>
            <DivRow>
              <span>Bairro: broklyn</span>
              <span>BH</span>
            </DivRow>
            <span>Acompanhante: {data.escortName}</span>
            <span>Tel: {data.escortPhone}</span>
          </Div>

        </Section>
        <Section title="Controle de Atendimento">
          <Div>
            <DivRow>
              <span>Sala de atendimento: 15:20</span>
              <span>liberação: 15:30</span>
            </DivRow>

            <span>Medicamentos usado pela vitima: {data.medicines}</span>
            <DivRow>
              <h5>Traumas:</h5>
              <span>atropelamento</span>
            </DivRow>
            <DivRow>
              <h5>Clínico:</h5>
              <span>Convulsão</span>
            </DivRow>
            <DivRow>
              <h5>Lesões:</h5>
              <span>Queimadura- Face</span>
            </DivRow>
            <DivRow>
              <span>1°PA:120/70</span>
              <span>Hora: 15:23</span>
            </DivRow>
            <DivRow>
              <span>2°PA:-/-</span>
              <span>Hora:-</span>
            </DivRow>
          
          </Div>
        </Section>

        <Section title="Procedimentos">
          <Div>
          <span>Temperatura:37°C</span>

            <DivRow>
              <span>Pulso:72bmp</span>
              <span>SPO²%:99%</span>
            </DivRow>

            <DivRow>
              <h5>Procedimentos:</h5>
              <span>Cadeira de Rodas</span>
            </DivRow>
            <DivRow>
              <h5>Material Usado:</h5>
              <span>Luva (5)</span>
            </DivRow>
            <DivRow>
              <h5>Destino :</h5>
              <span>Hospital</span>
            </DivRow>
            <Div>
              <span>Procedimentos Detalhados:</span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque veritatis tempora aliquam, dignissimos animi perferendis a consectetur praesentium iste libero repellendus deleniti, distinctio nesciunt eveniet maxime voluptate quo nemo blanditiis!
            </Div>
            
          </Div>
        </Section>
      </div>


    </Container>
  )
}