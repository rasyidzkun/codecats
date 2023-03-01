import gsap from "gsap";

export const animation = (e) => {
  const element = e;

  const mq = window.matchMedia("(max-width: 40em)");
  if (mq.matches) {
    gsap.to(element, {
      position: "fixed",
      top: "0",
      left: "0",
      right: "0",
      padding: "1rem 2.5rem",
      borderRadius: "0 0 50px 50px",
      border: "2px solid var(--white)",
      duration: 1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: element,
        start: "bottom+=200 top",
        end: "+=100",
        scrub: true,
      },
    });
  } else {
    gsap.to(element, {
      position: "fixed",
      top: "0.5rem",
      left: "2rem",
      right: "2rem",
      padding: "1.5rem 2rem",
      borderRadius: "50px",
      border: "3px solid var(--white)",
      duration: 1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: element,
        start: "bottom+=300 top",
        end: "+=250",
        scrub: true,
      },
    });
  }
};
