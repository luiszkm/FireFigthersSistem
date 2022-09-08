import { Container } from "./styles";
import{GiWolfHead} from "react-icons/gi"
import {Link} from "react-router-dom";
export function Logo ({icon =  <GiWolfHead className="icon" 
/>, title,...rest}){

  return(
    <Container {...rest}>
    

      {icon}
      
      <Link to ="/">

      <h1>{title}</h1>
      </Link>
    </Container>
  )
}