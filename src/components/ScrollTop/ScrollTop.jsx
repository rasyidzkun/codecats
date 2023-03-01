import icon from "../../assets/arrow-up.svg";
import { Up } from "./style";

const ScrollTop = () => {
  return (
    <Up href="#header">
      <img src={icon} alt="Scroll to top" />
    </Up>
  );
};

export default ScrollTop;
