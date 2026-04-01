import { NavLink } from "react-router-dom";
import Logo from "../assets/logoKasa.png"; 

export default function Header() {
  return (
    <header className="header container">
      <img src={Logo} alt="Kasa" className="header__logo" />

      <nav className="header__nav">
        <NavLink to="/" className="header__link">
          Accueil
        </NavLink>
        <NavLink to="/a-propos" className="header__link">
          A Propos
        </NavLink>
      </nav>
    </header>
  );
}
