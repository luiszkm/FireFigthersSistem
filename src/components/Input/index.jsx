import { Container } from "./styles";

export function Input({ name,id, value,placeholder, outer ,...rest }) {

  return (
    <Container>
      <label htmlFor={id}>{name}</label>
      <input {...rest }
      value={value}
        placeholder={placeholder}
        id={id}  />  {outer}

    </Container>
  )

}