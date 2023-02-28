import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

export const SideBarWrap = styled.div<{ isSideOpen: boolean }>`
  z-index: 5;
  border-radius: 15px 0 0 15px;
  background-color: #ececec;
  height: 100%;
  width: 40%;
  right: ${(props) => (props.isSideOpen ? "0" : "-100%")};
  padding: 12px;
  top: 0;
  position: fixed;
  transition: 0.5s ease;
`;

export const CloseBtn = styled(AiOutlineClose)`
  cursor: pointer;
`;
