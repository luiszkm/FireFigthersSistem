import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
 
  gap: 1rem;
  >div{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;

    >label{
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 1rem;
      
    }
  }



`