import { createGlobalStyle } from 'styled-components';

export const Reset = createGlobalStyle`
  *,
  :before,
  :after {
    box-sizing: border-box;
  }

  :before,
  :after {
    display: none;
    content: '';
  }

  * {
    font-family: 'Open Sans', sans-serif;
  }

  html,
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  ol,
  li,
  p {
    margin: 0;
    padding: 0;
  }

  ul,
  ol {
    li {
      list-style: none;
    }
  }

  button {
    border: none;
    background-color: initial;
    appearance: none;
  }

  a {
    text-decoration: none;
  }

  img {
    display: block;
    width: 100%;
  }

  fieldset {
    margin: 0;
    padding: 0;
    border: none;
  }


`;
