import {
  MainContent,
  Left,
  MobileSvg,
  Topic,
  Circle,
  Title,
  Subtitle,
} from "./style";
import { mobile } from "../../assets";
import CTA from "./CTA";

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

      <CTA />
    </Left>

    <MobileSvg src={mobile} alt="Hero Image" />
  </MainContent>
);

export default Content;
