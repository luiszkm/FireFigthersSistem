import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;


`


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  max-width: 60rem;
  margin: 0 auto;


  >textarea{
    width: 100%;
    padding: 1rem;
    min-height: 10rem;
    border-radius: 5px;

   
  }
 
  


`

export const InputStyle = styled.input`
  width: 100%;
  padding: 1rem;
  border-radius: 5px;

`

export const Button = styled.input`
  width: 100%;
  padding: 1rem;
  cursor: pointer;
  background-color: #A2C324;
  border-radius: 5px;


  :hover{
    opacity: 0.8;
  }


`