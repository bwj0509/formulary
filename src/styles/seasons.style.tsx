import styled from "styled-components";
import { MAX_PAGE } from "@/constants/constants";

export const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Box = styled.div<{ white?: boolean }>`
  display: flex;
  width: 150px;
  height: 150px;
  /* margin: 10px; */
  background-color: ${(props) => (props.white ? "white" : "#1d1d1d")};
  color: ${(props) => (props.white ? "#1d1d1d" : "white")};
  font-size: 30px;
  /* border-radius: 10px; */
  justify-content: center;
  align-items: center;
  transition: all ease-in 100ms;
  cursor: pointer;
  &:hover {
    font-size: 40px;
  }
`;
export const SkeltonBox = styled(Box)<{ page?: number }>`
  background-color: #858585;
  font-size: 20px;
  display: ${(props) => props.page === MAX_PAGE && "none"};
`;
