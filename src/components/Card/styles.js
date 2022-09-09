import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 1rem;
  max-width: 28rem;
  height: 40rem;
  padding: 4rem;
  background-color: rgba(0, 0, 0, 0.32);
  
  border: 1px solid rgba(0, 0, 0, 0.65);
  border-radius: 8px;

  >img{
    width: 20rem;
    height: 20rem;
    border-radius: 50%;
    background: red;
  }

  >svg,
  a {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    cursor: pointer;
  }

`

