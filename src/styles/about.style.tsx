import styled from "styled-components";
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";

export const Main = styled.main`
  position: relative;
`;

export const Box = styled.div`
  box-sizing: border-box;
  background-color: #f1ebeb;
  margin: 20px;
  height: 300px;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 5px 5px 10px #dcdcdc;
  min-width: 300px;
`;

export const Title = styled.h2`
  color: #464040;
`;

export const Ul = styled.ul`
  margin-top: 10px;
  padding-left: 20px;
`;

export const Li = styled.li`
  margin-bottom: 10px;
`;

export const A = styled.a`
  text-decoration: underline;
`;

export const SnsContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`;

export const Github = styled(AiFillGithub)`
  cursor: pointer;
  margin-right: 10px;
`;
export const Instagram = styled(AiOutlineInstagram)`
  cursor: pointer;
`;
