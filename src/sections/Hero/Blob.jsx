import { Blobs, PinkBlob, PurpleBlob, WhiteBlob } from "./style";
import { pinkBlob, purpleBlob, whiteBlob } from "../../assets";

const Blob = () => (
  <Blobs>
    <PinkBlob>
      <img src={pinkBlob} alt="Pink Blob" />
    </PinkBlob>
    <PurpleBlob>
      <img src={purpleBlob} alt="Purple Blob" />
    </PurpleBlob>
    <WhiteBlob>
      <img src={whiteBlob} alt="White Blob" />
    </WhiteBlob>
  </Blobs>
);

export default Blob;
