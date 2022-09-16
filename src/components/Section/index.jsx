import { Link } from "react-router-dom";
import { Container } from "./styles";
import { AiOutlineArrowLeft } from 'react-icons/ai'
export function Section({ title, children, back = true }) {

  return (
    <Container>
      {
        back ? <Link to='/'><AiOutlineArrowLeft />Voltar</Link> : ''
      }


      <h4>{title}</h4>
      {children}

    </Container>
  )
}