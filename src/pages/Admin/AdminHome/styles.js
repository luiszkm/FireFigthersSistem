import styled from "styled-components";

export const Container = styled.div`
min-height: 100vh;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;

>.banner{
  background: url("../../assets/banner.svg");
}

`


export const Main = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(1, 1fr);

  
 @media (min-width: 600px) {
  grid-template-columns: repeat(3, 1fr);

 }

 @media (min-width: 900px) {
  grid-template-columns: repeat(3, 1fr);

 }

`