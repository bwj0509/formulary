import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Box = styled.div<{ disable? }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 20px;
  width: 270px;
  height: 100px;
  background-color: ${(props) => props.theme.colors.f1Red};
  background-color: ${(props) => props.disable && "#282828"};
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

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h1`
  padding: 0 10px;
`;

export const Year = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

export const PrevWrap = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;
export const NextWrap = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

export const MoveContainer = styled.div`
  display: flex;
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  margin-top: 5px;
`;
