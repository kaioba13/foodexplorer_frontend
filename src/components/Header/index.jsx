import logoSvg from "../../assets/logo.svg";
import orderIcon from "../../assets/Order.svg";
import { FiLogOut } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

import { Button } from "../Button";
import { Container } from "./styles";
import { useState } from "react";

export function Header() {
  const [isMoble, setMobile] = useState(false);

  return (
    <Container>
      <header>
        <button className="mobileMenu-icon">
          <GiHamburgerMenu />
        </button>
        <div>
          <img src={logoSvg} alt="Logo" />
        </div>

        <button className="orderIcon">
          <span className="item">0</span>
        </button>

        <div className="divInput">
          <input type="text" placeholder="Busque por pratos ou ingredientes" />
        </div>

        <Button className="Order" title="Pedidos (0)" icon={orderIcon} />

        <button className="logOut">
          <FiLogOut />
        </button>
        <div className="nav-mobile">
          <div className="divInput">
            <input
              type="text"
              placeholder="Busque por pratos ou ingredientes"
            />
          </div>
          <button>Sair</button>
        </div>
      </header>
    </Container>
  );
}
