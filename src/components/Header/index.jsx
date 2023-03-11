import logoSvg from "../../assets/logo.svg";
import orderIcon from "../../assets/Order.svg";
import { FiLogOut } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";

import { Button } from "../Button";
import { Container } from "./styles";
import { useState, useEffect } from "react";

export function Header() {
  const [isMoble, setMobile] = useState(state);

  function handleClick(el, state) {
    useEffect(() => {}, []);

    return [isMoble, setMobile];
  }

  return (
    <Container>
      <header>
        <div className="menu-mobile">
          <button onClick={() => {}} className="mobileMenu-icon">
            <GiHamburgerMenu />
          </button>
          <div className="mobile-content">
            <div className="divInput2">
              <input
                type="text"
                placeholder="Busque por pratos ou ingredientes"
              />
            </div>
            <button className="logout-mobile">Sair</button>
          </div>
          <div>
            <img className="logo2" src={logoSvg} alt="Logo" />
          </div>
          <button className="orderIcon">
            <span className="item">0</span>
          </button>
        </div>

        <div>
          <img className="logo1" src={logoSvg} alt="Logo" />
        </div>

        <div className="divInput">
          <input type="text" placeholder="Busque por pratos ou ingredientes" />
        </div>

        <Button className="Order" title="Pedidos (0)" icon={orderIcon} />

        <button className="logOut">
          <FiLogOut />
        </button>
      </header>
    </Container>
  );
}
