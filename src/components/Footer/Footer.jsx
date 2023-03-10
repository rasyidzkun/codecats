import styled from "styled-components";

const FooterSection = styled.footer`
  padding: 1.2rem calc(2.5rem + 2.5vw);
  font-size: 1rem;
  text-align: center;
  position: relative;
  background-color: #0a0b10;
  color: var(--white);

  span,
  a {
    color: var(--pink);
  }
`;

const Footer = () => (
  <FooterSection>
    Build with <span>&hearts;</span> by{" "}
    <a
      href="https://github.com/rasyidzkun/"
      target={"_blank"}
      rel={"noopener noreferrer"}
    >
      Kucingscript
    </a>
  </FooterSection>
);

export default Footer;
