import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import icon from "../../assets/arrow-up.svg";
import { Up } from "./style";

const ScrollTop = () => {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  const scrollUp = () => {
    const element = document.getElementById("home");
    element.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  useEffect(() => {
    const element = ref.current;
    gsap.to(element, {
      display: "block",
      scrollTrigger: {
        trigger: element,
        start: "top top",
        scrub: true,
      },
    });
  }, []);

  return (
    <Up onClick={scrollUp}>
      <img ref={ref} src={icon} alt="Scroll to top" />
    </Up>
  );
};

export default ScrollTop;
