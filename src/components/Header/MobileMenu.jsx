import { useState } from "react";
import { Btn, BurgerBtn, MobileNav } from "./style";
import { navLinks } from "../../constants";

const MobileMenu = () => {
  const [click, setClick] = useState(false);

  return (
    <>
      <BurgerBtn onClick={() => setClick((click) => !click)} clicked={click}>
        <span></span>
      </BurgerBtn>

      <MobileNav clicked={click}>
        {navLinks.map((navLink, index) =>
          index !== navLinks.length - 1 ? (
            <a
              key={navLink.id}
              href={`#${navLink.target}`}
              onClick={() => setClick((click) => !click)}
            >
              {navLink.title}
            </a>
          ) : (
            <a
              key={navLink.id}
              href={`#${navLink.target}`}
              onClick={() => setClick((click) => !click)}
            >
              <Btn>{navLink.title}</Btn>
            </a>
          )
        )}
      </MobileNav>
    </>
  );
};

export default MobileMenu;
