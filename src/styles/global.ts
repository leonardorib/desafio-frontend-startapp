import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    background-color: #f1f1f1;
  }

  body, input, button, span {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: #919191;
  }

  h1, h2, h3, h4, h5, h6, strong {
    
    font-weight: 500;
    color: #404040
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
