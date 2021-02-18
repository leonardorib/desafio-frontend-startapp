import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    background-color: #f1f1f1;
  }

  body, input, button, span, a {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: #919191;
  }

  h1, h2, h3, h4, h5, h6, strong {
    
    font-weight: 500;
    color: #404040
  }

  h1 {
    font-size: 48px;
  }

  h2 {
    font-size: 30px;
  }

  button {
    cursor: pointer;
    border: 0;
  }

  input {
    color: #404040;

    ::-webkit-input-placeholder { 
      color: #a3a3a3;
    }
    ::-moz-placeholder { 
      color: #a3a3a3;
    }
    :-ms-input-placeholder { 
      color: #a3a3a3;
    }
    :-moz-placeholder {
      color: #a3a3a3;
    }
  }
`;

export default GlobalStyle;
