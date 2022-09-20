import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 7.7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.COLORS.SECONDARY_BG};
  padding: 2rem;
  >small{
    color: ${({ theme }) => theme.COLORS.WHITE};
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 1rem;

    >h4{
    font-family: 'Roboto';
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
    display: flex;
    align-items: center;
    gap: 1.2rem;
    }
  }
`