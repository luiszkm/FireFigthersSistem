import styled from "styled-components";

export const Container = styled.div`
width: 100%;
overflow: auto;


`

export const TableContainer = styled.table`
 border-collapse: collapse;
  width: 100%;
  height: 100%;
  font-family: 'Roboto';
  font-size: 1.4rem;
  line-height:2.2rem ;
  font-weight: 400;
  


  >tbody tr td,
  thead tr th{
    border: 1px solid #192227;
    padding: 1.6rem 2.4rem;
  }
  thead tr th{
    color: ${({ theme })=> theme.COLORS.WHITE_300};
    font-weight: 700;
  }
  >tbody tr td{
  color: ${({ theme })=> theme.COLORS.TEXT_SECONDARY_COLOR};
  
  }


`