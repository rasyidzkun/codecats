import styled from "styled-components";

export const CardWrapper = styled.div`
  height: calc(8rem + 12vw);
  width: calc(9rem + 12vw);
  background-color: var(--nav2);
  border-radius: 20px;
  position: relative;
  margin-top: calc(5rem + 5vw);
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;
export const Image = styled.div`
  img {
    width: 40%;
    height: 40%;
    position: absolute;
    left: 50%;
    bottom: 80%;
    transform: translate(-50%);
    border-radius: 50%;
    object-fit: cover;
    filter: drop-shadow(0px -3px 3px var(--nav2));
  }
`;

export const Text = styled.h4`
  color: var(--white);
  padding: 0 calc(1rem + 1vw);
  font-size: calc(0.5rem + 0.5vw);
  text-align: center;
`;

export const Name = styled.h3`
  color: var(--pink);
  font-size: calc(0.5rem + 1vw);
`;
