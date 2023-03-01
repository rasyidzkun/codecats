import { Icons } from "./style";
import { contactLinks } from "../../constants";

const Icon = () => (
  <Icons>
    {contactLinks.map((contactLink) => (
      <a
        key={contactLink.id}
        href={contactLink.target}
        target={"_blank"}
        rel={"noopener noreferrer"}
      >
        <img src={contactLink.icon} alt={contactLink.alt} />
      </a>
    ))}
  </Icons>
);

export default Icon;
