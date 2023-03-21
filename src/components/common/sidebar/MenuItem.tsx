import * as S from "@/components/common/sidebar/sidebar.style";
import Link from "next/link";
import { useRouter } from "next/router";

interface MenuItemProps {
  children: string;
  url: string;
  setIsSideOpen: Function;
}

export default function MenuItem({
  children,
  url,
  setIsSideOpen,
}: MenuItemProps) {
  const router = useRouter();
  const handleMovePage = () => {
    setIsSideOpen(false);
    router.push(`/${url}`);
  };

  return <S.MenuItem onClick={handleMovePage}>{children}</S.MenuItem>;
}
