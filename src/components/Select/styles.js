import styled from "styled-components";

export const Container = styled.div`

display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  color:${({ theme }) => theme.COLORS.TEXT_COLOR};
  width: 100%;
  gap: 1rem;
  >label{
    font-family: 'Roboto' ,sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.6rem;
  }




>select{
  background: transparent;
  border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 5px;
  padding: 12px 14px;
  height: 4.8rem;
  color:${({ theme }) => theme.COLORS.WHITE};
    
    >option{
      background-color: black;
    }
  }




`