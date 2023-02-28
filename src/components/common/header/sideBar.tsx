import * as S from "@/components/common/header/sideBar.style";

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
      <button>test</button>
      <div>메뉴1</div>
      <div>메뉴2</div>
      <div>메뉴3</div>
      <div>메뉴4</div>
    </S.SideBarWrap>
  );
}
