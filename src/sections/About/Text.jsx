import { AboutText, Human, Description, Circle } from "./Style";
import { human } from "../../assets";

const Text = () => (
  <AboutText>
    <Human>
      <img src={human} alt="Human" />
    </Human>

    <Description>
      We help our customers to tell about themselves, to grow and stand out in
      an increasingly competitive digital world, through creative projects that
      are able to attract and involve, creating strategic value.
    </Description>

    <Circle style={{ background: "var(--purple)" }} />
    <Circle style={{ background: "var(--pink)" }} />
    <Circle style={{ background: "var(--black)" }} />
  </AboutText>
);

export default Text;
