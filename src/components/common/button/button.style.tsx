import styled, { css } from "styled-components";

interface ButtonStyle {
  width?: string;
  height?: string;
  buttonColor?: string;
  fontSize?: string;
  fontColor?: string;
  padding?: string;
  borderRadius?: string;
  margin?: string;
}

export const Button = styled.button<ButtonStyle>`
  cursor: pointer;
  border: none;
  ${({
    width = "auto",
    height = "auto",
    buttonColor = "#e10600",
    fontSize = "14px",
    fontColor = "#eeeeee",
    padding = "10px",
    borderRadius = "10px",
    margin = "10px",
  }) => css`
    width: ${width};
    height: ${height};
    background-color: ${buttonColor};
    font-size: ${fontSize};
    color: ${fontColor};
    padding: ${padding};
    border-radius: ${borderRadius};
    margin: ${margin};
  `}
`;
