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
  max-width: 80rem;
  margin: 0 auto;

  >textarea{
    width: 100%;
    padding: 1rem;
    min-height: 10rem;
    border-radius: 5px;
  }
`
export const Div = styled.div`
  display: grid;
  gap:1rem;
  grid-template-columns: repeat(1, 1fr);
  width: 100%;
  @media (min-width:900px) {
    grid-template-columns: repeat(2, 1fr);

  }
 


`
export const DivRow = styled.div`
     display: grid;
  gap:1rem;
  grid-template-columns: repeat(1, 1fr);
  width: 100%;
  @media (min-width:900px) {
    grid-template-columns: repeat(3, 1fr);

  }
 
`
export const Grid = styled.div`
  width: 100%;
  height: fit-content;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width:500px) {
    grid-template-columns: repeat(2, 1fr);

  }
  @media (min-width:750px) {
    grid-template-columns: repeat(3, 1fr);

  }
  @media (min-width:900px) {
    grid-template-columns: repeat(4, 1fr);

  }

`
export const CalledItemContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 1rem;

 >div{
  width: 100%;
  gap: 1rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap ;


  @media (min-width:768px) {
    flex-direction: row;
  }
}
>label{
    font-family: 'Roboto' ,sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.6rem;
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
  }
 
`