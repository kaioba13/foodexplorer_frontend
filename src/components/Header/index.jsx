import logoSvg from "../../assets/logo.svg";
import orderIcon from "../../assets/Order.svg";
import { FiLogOut } from "react-icons/fi";

import { Button } from "../Button";
import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <header>
        <div>
          <img src={logoSvg} alt="Logo" />
        </div>

        <div className="divInput">
          <input type="text" placeholder="Busque por pratos ou ingredientes" />
        </div>

        <Button title="Pedidos (0)" icon={orderIcon} />

        <button className="logOut">
          <FiLogOut />
        </button>
      </header>
    </Container>
  );
}
