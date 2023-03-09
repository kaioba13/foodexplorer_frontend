import searchIcon from "../../assets/searchIcon.svg";
import orderIcon from "../../assets/Order.svg";

import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200 px;
  margin: 0 auto;
  padding: 3.7rem 2rem;

  header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
  }

  header input {
    width: 100%;
    padding: 1.6rem 0;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    border: none;
    background-image: url(${searchIcon});
    background-repeat: no-repeat;
    background-position: 10rem center;
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
    width: 500px;
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

  .mobileMenu-icon {
    display: none;
    background: none;
    border: none;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    cursor: pointer;
  }
  .mobileMenu-icon svg {
    width: 2.4rem;
    height: 1.8rem;
  }

  .orderIcon {
    display: none;
    width: 2.6rem;
    height: 2.2rem;
    background: none;
    border: none;
    cursor: pointer;
    background-image: url(${orderIcon});
    background-repeat: no-repeat;
    background-position: center center;
    position: relative;
  }

  .item {
    position: absolute;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    border-radius: 100%;
    padding: 0.2rem 0.6rem;
    top: -9px;
  }
  .nav-mobile {
    display: none;
    position: absolute;
    width: 100%;
    height: 300px;
    background-color: red;
    top: 40px;
  }

  @media (max-width: 950px) {
    .divInput,
    .logOut,
    .Order {
      display: none;
    }
    .mobileMenu-icon,
    .orderIcon,
    .nav-mobile {
      display: block;
    }
  }
`;
