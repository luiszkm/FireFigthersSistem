import { Container } from "./styles";
import{GiWolfHead} from "react-icons/gi"
export function Footer (){

  return(
    <Container>
      <small>
       
        <h4> <GiWolfHead size={20} fill="#7C7C8A" /> 
        SC</h4>
      &copy;-2022- Todos os Direitos reservados
        <a target="_blank" href="https://devsoares.com">Desenvolvido por Luis Soares</a>
      </small>
    </Container>
  )
}