import styled, { keyframes } from "styled-components";

const move = keyframes`
  0% {
    transform: translateY(-5px)
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(-5px)
  }
`;

export const AboutSection = styled.section`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  text-align: justify;
`;

export const Waves = styled.img`
  width: 100%;
  position: absolute;
  top: -1rem;
`;

export const Hand = styled.div`
  position: absolute;
  right: -1.5rem;
  bottom: -1rem;
  transform: rotate(-15deg);

  @media screen and (max-width: 40em) {
    width: 30%;
    overflow-x: hidden;
  }
`;

export const Main = styled.div`
  margin: 15rem 15rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 64em) {
    margin: 10rem calc(5rem + 5vw) 0;
  }

  @media screen and (max-width: 40em) {
    align-items: center;
    margin: 3rem calc(3rem + 3vh);
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  display: inline-block;
`;

export const CurvedLine = styled.div`
  width: 7rem;
  height: 2rem;
  border: 5px solid var(--purple);
  border-color: var(--purple) transparent transparent transparent;
  border-radius: 150%/60px 70px 0 0;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 40em) {
    flex-direction: column;
  }
`;

export const Rocket = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  padding-bottom: 5rem;
  animation: ${move} 2.5s ease infinite;

  @media screen and (max-width: 40em) {
    width: 50%;
    padding-bottom: 0;
  }
`;

export const AboutText = styled.div`
  position: relative;
  width: 50%;

  @media screen and (max-width: 40em) {
    width: 100%;
  }
`;

export const Human = styled.div`
  width: 50%;
  position: absolute;
  right: 0;
  bottom: 100%;

  @media screen and (max-width: 40em) {
    display: none;
  }
`;

export const Description = styled.h4`
  font-size: calc(0.5rem + 1vw);
  line-height: 1.5;
  color: var(--nav);
`;

export const Circle = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  margin: 1rem 0.5rem 0 0;
`;
