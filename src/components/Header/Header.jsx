import gsap from "gsap";
import { useRef, useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import logoImg from "../../assets/logo.svg";
import { Logo, Headers, Nav, Btn, BurgerBtn, MobileNav } from "./style";
import { navLinks } from "../../constants";
import { animation } from "./Animation";

const Header = () => {
  const [click, setClick] = useState(false);

  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  const scrollUp = (id, e) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  const handleClick = (id, e) => {
    setClick(!click);
    scrollUp(id, e);
  };

  useEffect(() => {
    animation(ref.current);
  }, []);

  return (
    <Headers id="header" ref={ref}>
      <Logo onClick={(e) => scrollUp("home", e)}>
        <img src={logoImg} alt="CodeCats" />
        <h3>CodeCats</h3>
      </Logo>
      <Nav>
        {navLinks.map((navLink, index) =>
          index !== navLinks.length - 1 ? (
            <a key={navLink.id} onClick={(e) => scrollUp(navLink.target, e)}>
              {navLink.title}
            </a>
          ) : (
            <a key={navLink.id} onClick={(e) => scrollUp(navLink.target, e)}>
              <Btn>{navLink.title}</Btn>
            </a>
          )
        )}
      </Nav>

      {/* ================================================= */}
      {/*                    MOBILE MENU                    */}
      {/* ================================================= */}

      <BurgerBtn onClick={() => setClick((click) => !click)} clicked={click}>
        <span></span>
      </BurgerBtn>

      <MobileNav clicked={click}>
        {navLinks.map((navLink, index) =>
          index !== navLinks.length - 1 ? (
            <a key={navLink.id} onClick={(e) => handleClick(navLink.target, e)}>
              {navLink.title}
            </a>
          ) : (
            <a key={navLink.id} onClick={(e) => handleClick(navLink.target, e)}>
              <Btn>{navLink.title}</Btn>
            </a>
          )
        )}
      </MobileNav>
    </Headers>
  );
};

export default Header;
