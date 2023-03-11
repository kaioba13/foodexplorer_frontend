import searchIcon from "../../assets/searchIcon.svg";
import orderIcon from "../../assets/Order.svg";

import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  header {
    max-width: 1200 px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
    padding: 2rem 2rem;
  }

  .divInput input {
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
  .divInput2 input {
    width: 100%;
    padding: 1.6rem 0;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    border: none;
    background-image: url(${searchIcon});
    background-repeat: no-repeat;
    background-position: left center;
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    margin-bottom: 4.6rem;

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

  .menu-mobile {
    visibility: hidden;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }

  .mobile-content {
    width: 100%;
    height: 200px;
    padding: 3.6rem 2.8rem;
    position: absolute;
    top: 35px;
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 0.5rem 0.5rem 0;
  }

  .logOut svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    width: 2.2rem;
    height: 2.2rem;
  }

  .mobileMenu-icon {
    background: none;
    border: none;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    cursor: pointer;
  }
  .mobileMenu-icon svg {
    width: 2.4rem;
    height: 1.8rem;
  }

  .logout-mobile {
    background: none;
    border: none;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 300;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    cursor: pointer;
  }
  .logout-mobile:hover {
    opacity: 0.9;
    transition: 0.1s;
  }

  .orderIcon {
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
    .Order,
    .logo1 {
      display: none;
    }
    .menu-mobile {
      visibility: visible;
    }
  }
`;
