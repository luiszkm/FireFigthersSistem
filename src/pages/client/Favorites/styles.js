import styled from "styled-components";

export const Container = styled.div`




`

export const Gallery =styled.div`


  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(1,1fr);
  grid-template-rows: auto;
  @media (min-width:600px) {
    grid-template-columns: repeat(2,1fr);

  }

  @media (min-width:900px) {
    grid-template-columns: repeat(3,1fr);

  }
  @media (min-width:1200px) {
    grid-template-columns: repeat(4,1fr);

  }

`