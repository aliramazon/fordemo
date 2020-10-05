import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    outline: none;
  }

  html {
    font-size: 62.5%;
  }

  body {
    box-sizing: border-box;
    font-family: 'Poppins', Arial, Helvetica, sans-serif; 
  }
  
  input, button {
    font-family: 'Poppins', Arial, Helvetica, sans-serif; 

  }
`;

export default GlobalStyle;
