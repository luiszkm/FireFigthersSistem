import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  >section{

    @media (min-width:850px) {
      padding: 4rem 12.4rem;
        min-height: 100vh;

    }
  }
`


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-content: center;
  max-width: 1120px;
  width: 100%;

  
  @media (min-width:768px) {

    gap: 3.2rem;

  }
>div{

  @media (min-width:768px) {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1rem;

  }
}
.ingredientContainer{
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  >span{
    color:${({ theme }) => theme.COLORS.TEXT_COLOR};
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.6rem;
  }
> .ingredients{
  width: 100%;
  border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  padding: 8px;
  min-height: 4.8rem;

  @media (min-width:768px) {
    flex-direction: row;
    height: 4.8rem;

  }
}
}


`
