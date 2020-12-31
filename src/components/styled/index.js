import { createGlobalStyle } from 'styled-components';

const primary_color = '#5990dc';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,400&display=swap');
  
  body {
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
  }

  .main-header {
    background-color: ${primary_color};
  }

  .product-card {
    &:hover,
    &.active {
      box-shadow: 0 0 0 2px ${primary_color};
    }
  }

  .product-detail {
    header {
      button:not(:disabled):not(.disabled) {
        &:hover,
        &:focus,
        &:active {
          color: ${primary_color};
        }
      }
    }
  }

  .product-search {
    button:not(:disabled):not(.disabled) {
      &:hover,
      &:focus,
      &:active {
        color: ${primary_color};
      }
    }
  }
`;

export default GlobalStyle;