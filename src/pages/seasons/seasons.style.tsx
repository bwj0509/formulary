import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const Box = styled.div`
  display: flex;
  width: 200px;
  height: 100px;
  margin: 10px;
  background-color: #c9e6ff;
  font-size: 30px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const Target = styled.div`
  width: 300px;
  background-color: #ffb3b3;
  visibility: hidden;
`;
