import styled from "styled-components";

export const Wrap = styled.div`
  width: 80%;
  margin: 7px;
  background-color: #ececec;
  border-radius: 20px;
  color: #090909;

  font-weight: bold;
  overflow: hidden;
  padding: 10px;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3px 3px 0 3px;
`;

export const MoreInfo = styled.div`
  cursor: pointer;
`;

export const Name = styled.h3`
  font-size: 25px;
  text-align: center;
`;

export const Constructor = styled.div`
  margin-top: 5px;
  text-align: center;
`;

export const Index = styled.div`
  font-size: 15px;
  color: ${(props) => props.theme.colors.f1Red};
`;

export const Birth = styled.span`
  font-size: 15px;
  margin-left: 5px;
  color: #949494;
`;

export const Nation = styled.div`
  margin-top: 5px;
  text-align: center;
`;
