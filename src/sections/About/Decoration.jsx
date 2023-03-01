import { Waves, Hand } from "./Style";
import { wave, hand } from "../../assets";

const Decoration = () => (
  <>
    <Waves src={wave} alt="Wave" />
    <Hand>
      <img src={hand} alt="Hand" />
    </Hand>
  </>
);

export default Decoration;
