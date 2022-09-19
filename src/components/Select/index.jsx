import { Container } from "./styles";


export function Select ({onChange}){

  return(
    <Container>
        <label htmlFor=""></label>
            <select onChange={onChange} >
              <option value=""></option>
              <option value="lojista">Lojista </option>
              <option value="colaborador"> Colaborador </option>
              <option value="cliente"> Cliente</option>
              <option value="terceirizado"> Terceirizado</option>
            </select>
    </Container>
  )
}