import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Btn } from "./style";
import { arrowRight } from "../../assets";

const CTA = () => {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  const scrollDown = () => {
    const element = document.getElementById("about");
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
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
    <Btn ref={ref} onClick={scrollDown}>
      Get in touch &nbsp; <img src={arrowRight} alt="Arrow Right" />
    </Btn>
  );
};

export default CTA;
