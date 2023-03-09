import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";

export const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const HamburgerBtn = styled(GiHamburgerMenu)`
  cursor: pointer;
`;

export const LogoWrap = styled.div``;

export const SidebarItemList = styled.div<{ isSideOpen: boolean }>`
  opacity: ${(props) => (props.isSideOpen ? 1 : 0)};
  visibility: ${(props) => (props.isSideOpen ? "visible" : "hidden")};
  transition: opacity 100ms ease-in-out, visibility 0.3s ease-in-out;
  will-change: opacity, visibility;
  max-height: ${(props) => (props.isSideOpen ? "1000px" : "0")};
`;
