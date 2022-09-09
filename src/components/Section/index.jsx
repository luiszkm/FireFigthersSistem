import { Container } from "./styles";

export function Section ({title, children}){

  return(
    <Container>
      <h4>{title}</h4>
      {children}

    </Container>
  )
}