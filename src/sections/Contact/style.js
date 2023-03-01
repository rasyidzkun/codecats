import styled from "styled-components";

export const ContactSection = styled.section`
  width: 100vw;
  padding: calc(2.5rem + 2.5vw) 0;
  background-color: #0a0b10;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: var(--white);
  display: inline-block;
  font-size: 2rem;
  margin-bottom: 3rem;
  position: relative;

  &::after {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    border-bottom: 2px solid var(--pink);
  }
`;

export const Icons = styled.div`
  display: flex;
  margin-bottom: 3rem;

  a {
    img {
      width: 3rem;
      height: 3rem;

      @media screen and (max-width: 40em) {
        width: 2.3rem;
        height: 2.3rem;
      }
    }

    &:hover {
      img {
        filter: invert(20%) sepia(100%) saturate(500%) hue-rotate(580deg)
          brightness(100%) contrast(97%);
      }
    }

    &:not(:last-child) {
      margin-right: 2rem;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  input,
  textarea {
    padding: 1rem calc(0.5rem + 1vw);
    margin-bottom: 1rem;
    background-color: var(--nav2);
    border: none;
    border-radius: 4px;
    color: #eff7f8;
    transition: all 0.3s;

    &:active,
    &:focus {
      background-color: var(--nav);
    }

    ::placeholder {
      color: #eff7f8;
      opacity: 0.6;
    }

    &[name="name"] {
      margin-right: 1rem;
    }
  }

  button {
    padding: 0.8rem 2rem;
    background-color: var(--white);
    font-size: 1.2rem;
    border-radius: 4px;
    color: #0a0b10;
    cursor: pointer;
    transition: transform 0.3s;
    margin: 0 auto;
    font-weight: 500;

    &:hover {
      transform: scale(1.1);
    }
    &:active {
      transform: scale(0.9);
    }
  }
`;

export const Row = styled.div`
  @media screen and (max-width: 40em) {
    display: flex;
    flex-direction: column;

    input {
      &[name="name"] {
        margin-right: 0;
      }
    }
  }
`;
