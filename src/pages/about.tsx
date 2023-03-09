import Lottie from "lottie-react";
import { default as lottie } from "public/lottie/astronot.json";
import * as S from "@/styles/about.style";
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";

export default function About() {
  return (
    <S.Main>
      <Lottie animationData={lottie}></Lottie>
      <S.Box>
        <S.Title>ABOUT</S.Title>
        <S.Ul>
          <S.Li>
            The main purpose of this site is to provide <b>F1 results</b>
          </S.Li>
          <S.Li>
            All data used for this project is coming from{" "}
            <S.A href="http://ergast.com/mrd/" target="_blank">
              Ergast developer API.
            </S.A>
          </S.Li>
          <S.Li>
            All sources for this project are <b>open source</b> and can be found
            on{" "}
            <S.A href="https://github.com/bwj0509/formulary" target="_blank">
              GitHub.
            </S.A>
          </S.Li>
        </S.Ul>
        <S.SnsContainer>
          <S.A href="https://github.com/bwj0509" target="_blank">
            <S.Github size={35} />
          </S.A>
          <S.A href="https://www.instagram.com/100woojin/" target="_blank">
            <S.Instagram size={35} />
          </S.A>
        </S.SnsContainer>
      </S.Box>
    </S.Main>
  );
}
