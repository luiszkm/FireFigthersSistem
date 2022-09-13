import { Container, Div, DivRow } from "./styles";
import { AiOutlineHeart, AiOutlinePlus, AiOutlineLine } from "react-icons/ai";
import { Button } from "../Button";
import { Section } from "../Section";


export function CardPreview({ data }) {




  return (
    <Container>
      <h4>Responsável: bombeiro <strong>data:  01/01/2022</strong></h4>

      <div>
        <Section title="Dados da Vitima">
          <Div>
            <span>Lojista</span>
            <DivRow>
              <span>Nome : irineu Pereira </span>
              <span>30 anos</span>
            </DivRow>

            <span>Rg: MG 3232323232</span>
            <DivRow>
              <span>Sexo: M </span>
              <span>Tel: 323223232</span>
            </DivRow>
            <DivRow>
              <span>Rua: suvaco da cobra </span>
              <span>N° 555</span>
            </DivRow>
            <DivRow>
              <span>Bairro: broklyn</span>
              <span>BH</span>
            </DivRow>
            <span>Acompanhante: creid oliveira</span>
            <span>Tel:31 3223233</span>
          </Div>

        </Section>
        <Section title="Controle de Atendimento">
          <Div>
            <DivRow>
              <span>Sala de atendimento: 15:20</span>
              <span>liberação: 15:30</span>
            </DivRow>

            <span>Medicamentos usado pela vitima: dorflex, 14:00</span>
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