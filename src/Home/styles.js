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
    font-size: clamp(2.8rem, 2vw + 1rem, 4rem);
    line-height: clamp(3.6rem, 2vw + 1rem, 5rem);
  }

  p,
  li,
  strong {
    font-size: clamp(1.4rem, 1vw + 0.4rem, 2rem);
    line-height: clamp(1.8rem, 1vw + 0.4rem, 2.5rem);
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

    margin-top: 3.2rem;
  }

  .ingredients {
    h1 {
      margin-bottom: 3.2rem;
    }

    ul {
      margin-bottom: 2.4rem;
    }

    ul,
    ol {
      padding-left: 2.4rem;
    }
  }

  @media (min-width: 1120px) {
    flex-direction: row;
    max-width: fit-content;
    gap: 19rem;
    padding: 9rem 6rem;

    .recipe {
      max-width: 43.5rem;
    }

    .ingredients {
      max-width: 52.5rem;
    }
  }
`;
