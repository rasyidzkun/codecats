import {
  MainContent,
  Left,
  MobileSvg,
  Topic,
  Circle,
  Title,
  Subtitle,
  Btn,
} from "./style";
import { mobile, arrowRight } from "../../assets";

const Content = () => (
  <MainContent>
    <Left>
      <Topic>
        <Circle /> We Build Web
      </Topic>

      <Title>Transforming your digital presence</Title>
      <Subtitle>
        we help fast growing companies build award winning websites
      </Subtitle>

      <Btn href="#about">
        Get in touch &nbsp; <img src={arrowRight} alt="Arrow Right" />
      </Btn>
    </Left>

    <MobileSvg src={mobile} alt="Hero Image" />
  </MainContent>
);

export default Content;
