import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  width: 270px;
  height: 100px;
  background-color: ${(props) => props.theme.colors.f1Red};
  color: #f1f1f1;
  margin-top: 30px;
  text-align: center;
  border-radius: 10px;
  cursor: pointer;
  transition: all ease-in 100ms;
  &:hover {
    font-size: 25px;
  }
`;

export const Title = styled.h1`
  padding: 0 10px;
`;
