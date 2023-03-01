import { lazy } from "react";
import { TestimonialSection, Title, Carousel } from "./style";
import { testimonialsUsers } from "../../constants";
import Slider from "react-slick";

const Card = lazy(() => import("../../components/Card/Card"));

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <TestimonialSection id="testimonials">
      <Title>Few good words about us!</Title>
      <Carousel>
        <Slider {...settings}>
          {testimonialsUsers.map((user) => (
            <Card
              key={user.id}
              text={user.text}
              name={user.name}
              profile={user.profile}
            />
          ))}
        </Slider>
      </Carousel>
    </TestimonialSection>
  );
};

export default Testimonials;
