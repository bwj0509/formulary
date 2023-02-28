import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
}
  html {
    box-sizing: border-box;
    font-size: 16px;
    background-color: #f8f9fa;
    max-width: 420px;
    height: 100vh;
    margin: 0 auto;
  }
  a { cursor: pointer; text-decoration: none; color:black; }
`;
