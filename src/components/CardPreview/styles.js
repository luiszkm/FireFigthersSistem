import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding-top: 3rem;
  border: 1px solid white;
  position: relative;
  >svg{
    position:absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
  }
  >h4{
    display: flex;
    flex-direction: column;
  }
  >div{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-content: center;

     @media (min-width:768px) {
      flex-direction: row;
      font-size: 2rem;
     }
     >section{
  padding: 1rem;
  align-items: flex-start;
  }
  }
`

export const Div = styled.div`
display: flex;
gap: 1rem;
align-items: flex-start;
flex-direction: column;
>span{
  border-bottom: 1px solid white;
  padding: 0 .2rem;
 
}

`
export const DivRow = styled.div`
display: flex;
gap: 1rem;
align-items: center;
>span{
  border-bottom: 1px solid white;
  font-weight: 400;
}

`