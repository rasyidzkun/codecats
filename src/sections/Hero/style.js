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

export const HomeSection = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: #0a0b10;
  display: flex;
  justify-content: center;
  position: relative;

  @media screen and (max-width: 48em) {
    height: 70vw;
    display: block;
  }

  @media screen and (max-width: 40em) {
    height: auto;
    padding-bottom: 2rem;
  }
`;

export const Blobs = styled.div`
  width: 100%;
  position: absolute;
  right: 0;

  @media screen and (max-width: 48em) {
    opacity: 0.5;
  }
`;

export const PinkBlob = styled.div`
  width: calc(15% + 15vw);
  position: absolute;
  right: 0;
  top: calc(5rem + 5vw);
  z-index: 99;
`;

export const PurpleBlob = styled.div`
  width: calc(10% + 10vw);
  position: absolute;
  right: 0;
`;

export const WhiteBlob = styled.div`
  width: calc(20% + 20vw);
  position: absolute;
  right: calc(2.5rem + 3.5vw);
  top: calc(2rem + 2vw);
  z-index: 9;
`;

export const MainContent = styled.div`
  width: 70vw;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 48em) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  line-height: 1.5;
  color: var(--white);

  @media screen and (max-width: 48em) {
    width: 80%;
    text-align: center;
    align-items: center;
    justify-content: space-around;
    margin-top: calc(2.5rem + 2.5vw);
    filter: drop-shadow(2px 4px 6px black);
  }

  @media screen and (max-width: 40em) {
    filter: none;
  }
`;

export const MobileSvg = styled.img`
  max-width: 100%;
  width: calc(30% + 20vw);
  z-index: 999;
  animation: ${move} 2.5s ease infinite;

  @media screen and (max-width: 48em) {
    align-self: flex-start;
    position: absolute;
    bottom: 0;
    width: calc(30% + 20vw);
    opacity: 0.5;
  }

  @media screen and (max-width: 40em) {
    display: none;
  }
`;

export const Topic = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--nav);
  font-weight: 700;
  font-size: calc(0.4rem + 0.4vw);
  padding: 0.5rem 1rem;
  border-radius: 20px;
`;

export const Circle = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: var(--purple);
  margin-right: 0.5rem;
`;

export const Title = styled.h1`
  font-size: calc(2rem + 1vw);
  line-height: 1.2;
  padding: 0.5rem 0;
`;

export const Subtitle = styled.h5`
  font-size: calc(0.5rem + 0.5vw);
  color: var(--nav2);
`;

export const Btn = styled.a`
  background-color: var(--white);
  color: #0a0b10;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  border-radius: 20px;
  cursor: pointer;
  font-size: calc(0.5rem + 0.5vw);
  font-weight: 700;
  display: flex;
  align-items: center;
  transition: transform 0.2s;

  img {
    width: 1.5rem;
  }

  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }
`;
