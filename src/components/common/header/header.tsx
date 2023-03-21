import { useState } from "react";
import Fomulalogo from "public/svg/fomulalogo.svg";
import * as S from "@/components/common/header/header.style";
import Link from "next/link";
import SidebarMenuItem from "@/components/common/sidebar/MenuItem";
import dayjs from "dayjs";

export default function Header() {
  const [isSideOpen, setIsSideOpen] = useState(false);

  const handleSideStatus = () => {
    setIsSideOpen((prev) => !prev);
  };

  const nowYear = dayjs().year();

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
        <SidebarMenuItem
          url={`seasons/${nowYear}`}
          setIsSideOpen={setIsSideOpen}
        >
          Current Season
        </SidebarMenuItem>
        <SidebarMenuItem url="about" setIsSideOpen={setIsSideOpen}>
          About
        </SidebarMenuItem>
      </S.SidebarItemList>
    </div>
  );
}
