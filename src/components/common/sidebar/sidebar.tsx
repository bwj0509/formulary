import * as S from "@/components/common/sidebar/sidebar.style";
import SidebarMenuItem from "@/components/common/sidebar/MenuItem";

interface SidebarProps {
  isSideOpen: boolean;
  setIsSideOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar({ isSideOpen, setIsSideOpen }: SidebarProps) {
  const handleCloseSide = () => {
    setIsSideOpen(false);
  };

  return (
    <S.SideBarWrap id="sidebar" isSideOpen={isSideOpen}>
      <S.CloseBtn size="25px" onClick={handleCloseSide}></S.CloseBtn>
      <S.MenuList onClick={handleCloseSide}>
        <SidebarMenuItem>Seasons</SidebarMenuItem>
        <SidebarMenuItem>Constructs</SidebarMenuItem>
        <SidebarMenuItem>Driver</SidebarMenuItem>
        <SidebarMenuItem>About</SidebarMenuItem>
      </S.MenuList>
    </S.SideBarWrap>
  );
}
