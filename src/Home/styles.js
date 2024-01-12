import styled from "styled-components";

export const Container = styled.main`
  max-width: 32rem;
  margin-inline: auto;

  padding: 5.6rem 4rem;
  box-sizing: content-box;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  h1 {
    font-size: 2.8rem;
    line-height: 3.6rem;
  }

  p,
  li,
  strong {
    font-size: 1.4rem;
  }

  img {
    width: 100%;
    margin-block: 3.2rem;
  }

  button {
    background-color: #a54328;
    border: none;
    border-radius: 8px;
    padding: 1.5rem 1.95rem;

    font-family: "Source Serif 4", serif;
    color: #ffffff;
    cursor: pointer;
    transition: 1s;

    &:hover {
      filter: brightness(0.9);
    }

    margin-top: 1.8rem;
  }

  .ingredients {
    h1 {
      margin-bottom: 3.2rem;
    }
  }
`;
