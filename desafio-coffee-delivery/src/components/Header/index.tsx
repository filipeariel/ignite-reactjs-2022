import { NavLink } from "react-router-dom";
import { MapPin, ShoppingCart } from "phosphor-react";

import { HeaderContainer } from "../Header/styles";
import logoCoffeeDelivery from "../../assets/logo-coffee-delivery.svg";

export function Header() {
  return (
    <HeaderContainer>
      <nav>
        <NavLink to="/" title="Ínicio">
          <img src={logoCoffeeDelivery} alt="" />
        </NavLink>
        <div>
          <div>
            <MapPin size={30} weight="fill" />
            Peruíbe / SP
          </div>
          <NavLink to="/checkout" title="Carrinho">
            <ShoppingCart size={30} weight="fill" />
          </NavLink>
        </div>
      </nav>
    </HeaderContainer>
  );
}
