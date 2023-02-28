import * as S from "@/components/common/sidebar/sidebar.style";
import Link from "next/link";

interface MenuItemProps {
  children: string;
}

export default function MenuItem({ children }: MenuItemProps) {
  return (
    <Link href={`/${children.toLowerCase()}`}>
      <S.MenuItem>{children}</S.MenuItem>
    </Link>
  );
}
