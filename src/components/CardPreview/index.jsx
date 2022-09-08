import { Container } from "./styles";
import { AiOutlineHeart, AiOutlinePlus, AiOutlineLine } from "react-icons/ai";
import { Button } from "../Button";
import { Section } from "../Section";


export function CardPreview({ data }) {



  return (
    <Container>
      <h3>Responsável: bombeiro data: 01/01/2022</h3>
      
      <Section title="Dados da Vitima">
      <div>
        <span>Lojista</span>
        <span>Nome: irineu Pereira 30 anos </span>
      </div>
      </Section>
      

      <div>
        <span>Rg: MG 3232323232</span>
        <span>Sexo: M </span>
        <span>Tel: 323223232</span>
      </div>
    </Container>
  )
}