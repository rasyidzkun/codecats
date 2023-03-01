import {
  AboutSection,
  Main,
  Title,
  CurvedLine,
  Content,
  Rocket,
} from "./Style";
import { rocket } from "../../assets";
import Decoration from "./Decoration";
import Text from "./Text";

const About = () => (
  <AboutSection id="about">
    <Decoration />

    <Main>
      <Title>About Us</Title>
      <CurvedLine />

      <Content>
        <Rocket>
          <img src={rocket} alt="Rocket" />
        </Rocket>

        <Text />
      </Content>
    </Main>
  </AboutSection>
);

export default About;
