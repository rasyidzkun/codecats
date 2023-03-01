import { CardWrapper, Image, Text, Name } from "./style";

const Card = ({ text, name, profile }) => {
  return (
    <CardWrapper>
      <Image>
        <img src={profile} alt={name} />
      </Image>
      <Text>{text}</Text>
      <Name>{name}</Name>
    </CardWrapper>
  );
};

export default Card;
