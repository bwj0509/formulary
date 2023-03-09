import { useState } from "react";
import Fomulalogo from "public/svg/fomulalogo.svg";
import * as S from "@/components/common/header/header.style";
import Link from "next/link";
import SidebarMenuItem from "@/components/common/sidebar/MenuItem";

export default function Header() {
  const [isSideOpen, setIsSideOpen] = useState(false);

  const handleSideStatus = () => {
    setIsSideOpen((prev) => !prev);
  };

  return (
    <div>
      <S.Header>
        <Link href="/">
          <S.LogoWrap>
            <Fomulalogo width="80px" />
          </S.LogoWrap>
        </Link>
        <S.HamburgerBtn onClick={handleSideStatus}></S.HamburgerBtn>
        {/* <Sidebar isSideOpen={isSideOpen} setIsSideOpen={setIsSideOpen} /> */}
      </S.Header>
      <S.SidebarItemList isSideOpen={isSideOpen}>
        <SidebarMenuItem url="seasons" setIsSideOpen={setIsSideOpen}>
          Past Seasons
        </SidebarMenuItem>
        <SidebarMenuItem setIsSideOpen={setIsSideOpen}>
          Current Season
        </SidebarMenuItem>
        <SidebarMenuItem setIsSideOpen={setIsSideOpen}>About</SidebarMenuItem>
      </S.SidebarItemList>
    </div>
  );
}
