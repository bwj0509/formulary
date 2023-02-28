import { useState } from "react";
import Fomulalogo from "public/svg/fomulalogo.svg";
import Sidebar from "@/components/common/header/sideBar";
import * as S from "@/components/common/header/header.style";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  const [isSideOpen, setIsSideOpen] = useState(false);

  const handleSideOpen = () => {
    setIsSideOpen(true);
  };

  return (
    <S.Header>
      <S.LogoWrap>
        <Fomulalogo width="80px" />
        <S.LogoTitle>Fomulary</S.LogoTitle>
      </S.LogoWrap>
      <S.HamburgerBtn onClick={handleSideOpen}></S.HamburgerBtn>
      <Sidebar isSideOpen={isSideOpen} setIsSideOpen={setIsSideOpen} />
    </S.Header>
  );
}
