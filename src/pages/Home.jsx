import { Hero, About, Testimonials, Contact } from "../sections";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Home = () => (
  <Container>
    <Hero />
    <About />
    <Testimonials />
    <Contact />
  </Container>
);

export default Home;
