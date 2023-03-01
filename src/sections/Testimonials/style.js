import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const TestimonialSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow-x: hidden;
`;

export const Title = styled.h1`
  color: #0a0b10;
  display: inline-block;
  font-size: calc(1rem + 1.5vw);
  margin-top: 1.5rem;
  position: relative;

  &::before {
    content: "";
    height: 1px;
    width: 50%;
    border-bottom: 2px solid var(--purple);
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
  }
`;

export const Carousel = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 40em) {
    width: 90vw;
    .slick-slider .slick-arrow {
      display: none;
    }
  }

  .slick-slider .slick-arrow:before {
    color: #0a0b10;
    font-size: 1.5rem;
    @media screen and (max-width: 40em) {
      display: none;
    }
  }

  .slick-slider .slick-dots button:before {
    color: #0a0b10;
    font-size: 1.5rem;
  }

  .slick-slide.slick-active {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
    padding: 0;
    margin-bottom: 3rem;
  }
`;
