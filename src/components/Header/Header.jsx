import logoImg from "../../assets/logo.svg";
import MobileMenu from "./MobileMenu";
import { Logo, Headers, Nav, Btn } from "./style";
import { navLinks } from "../../constants";

const Header = () => {
  return (
    <Headers id="header">
      <Logo>
        <img src={logoImg} alt="CodeCats" />
        <h3>CodeCats</h3>
      </Logo>

      <Nav>
        {navLinks.map((navLink, index) =>
          index !== navLinks.length - 1 ? (
            <a key={navLink.id} href={`#${navLink.target}`}>
              {navLink.title}
            </a>
          ) : (
            <a key={navLink.id} href={`#${navLink.target}`}>
              <Btn>{navLink.title}</Btn>
            </a>
          )
        )}
      </Nav>

      <MobileMenu />
    </Headers>
  );
};

export default Header;
