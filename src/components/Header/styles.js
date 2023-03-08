import searchIcon from "../../assets/searchIcon.svg";

import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200 px;
  margin: 0 auto;
  padding: 3.7rem 0;

  header {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  header input {
    width: 100%;
    padding: 1.6rem 0;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    border: none;
    background-image: url(${searchIcon});
    background-repeat: no-repeat;
    background-position: 13rem center;
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    text-align: center;
  }

  input::placeholder {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }

  .divInput {
    width: 580px;
  }

  .logOut {
    background: none;
    border: none;
    cursor: pointer;
  }

  .logOut svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    width: 2.2rem;
    height: 2.2rem;
  }
`;
