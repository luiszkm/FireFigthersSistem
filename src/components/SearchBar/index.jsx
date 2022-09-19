import { Container } from "./styles";
import { AiOutlineSearch } from "react-icons/ai"

export function SearchBar({...rest}) {

  return (
    <Container>
      <label htmlFor="search">
        <AiOutlineSearch color="#FFFFFF" />
      </label>
      <input id="search"
        type="text"
        {...rest}
        placeholder="pesquisar ocorrências" />
    </Container>
  )
}