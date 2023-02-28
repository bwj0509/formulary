import * as S from "@/styles/index.style";
import { TypeAnimation } from "react-type-animation";
import Fomulalogo from "public/svg/fomulalogo.svg";
import f1mainimg from "public/images/f1history.jpg";
import Button from "@/components/common/button/button";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handleMovePage = () => {
    router.push("/seasons");
  };
  return (
    <>
      <S.MainWrap>
        <S.MainImg src={f1mainimg} alt="f1Img" width={300} height={200} />
        <S.Title>We offer you</S.Title>
        <TypeAnimation
          sequence={[
            "80 Seasons",
            2000,
            "565 Drivers",
            2000,
            "7884 Races",
            2000,
          ]}
          wrapper="h2"
          repeat={Infinity}
          style={{ fontSize: "30px", color: "#e10600", padding: "10px" }}
        />
        <S.Title>Fall into</S.Title>
        <S.Title>
          Fantastic world of <Fomulalogo width="60px" />
        </S.Title>
        <Button onClick={handleMovePage} margin="25px">
          START
        </Button>
      </S.MainWrap>
    </>
  );
}
