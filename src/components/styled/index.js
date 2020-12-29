import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,400&display=swap');
  
  body {
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
  }
`;

export default GlobalStyle;