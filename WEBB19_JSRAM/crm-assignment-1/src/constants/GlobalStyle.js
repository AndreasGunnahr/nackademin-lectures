import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  ::-webkit-scrollbar{
    display: none;
  }

  body {
    background: ${({ theme }) => theme.color.white};
    overflow-x: hidden;
  }

`;

export default GlobalStyle;
