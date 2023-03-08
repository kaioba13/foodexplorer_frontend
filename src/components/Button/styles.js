import styled from "styled-components";

export const Container = styled.button`
  border: none;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 1.1rem;

  background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  box-shadow: 0 0.2rem 0.2rem rgba(0, 0, 0, 0.1);
  padding: 1.2rem 2.4rem;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2.4rem;

  max-width: max-content;
  cursor: pointer;

  :hover {
    opacity: 0.9;
    transition: 0.1s;
  }
`;
