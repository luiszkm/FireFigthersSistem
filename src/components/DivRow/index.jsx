import { Container } from "./styles";


export function DivRow({ title, children }) {

  return (
    <Container>
      <h4>{title}</h4>
      <div>
        {children}
      </div>
    </Container>
  )
}