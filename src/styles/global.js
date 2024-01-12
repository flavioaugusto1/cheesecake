import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :root{
    font-size: 62.5%;
  }

  body {
    background-color: #F9F4FB;
    font-family: 'Source Serif Pro', serif;
  }

    h1, strong, p, li {
    color: #A54328;
    
  }

`;
