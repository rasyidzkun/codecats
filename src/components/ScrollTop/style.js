import styled from "styled-components";

export const Up = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 9;
  cursor: pointer;

  img {
    width: 3rem;
    height: 3rem;
    border: 2px solid var(--white);
    border-radius: 50%;
    background-color: var(--white);
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.1);
    }

    &:active {
      transform: scale(0.9);
    }
  }

  @media screen and (max-width: 48em) {
    display: none;
  }
`;
