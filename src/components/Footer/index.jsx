import { Container } from "./styles";
import{FiHexagon} from "react-icons/fi"
export function Footer (){

  return(
    <Container>
      <small>
       
        <h4> <FiHexagon size={20} fill="#7C7C8A" /> 
        Food Explorer</h4>
      &copy;-2022- Todos os Direitos reservados
        <a href="https://devsoares.com">@luis_yoshi</a>
      </small>
    </Container>
  )
}