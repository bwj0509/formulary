import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
    background-color: #f8f9fa;
    width: 400px;
    margin: 0 auto;
    padding: 10px;
  }
  a { cursor: pointer; text-decoration: none; }
`;
