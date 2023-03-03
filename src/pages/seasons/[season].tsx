import { useRouter } from "next/router";
import * as S from "@/styles/season.style";
import Link from "next/link";

export default function Season() {
  const router = useRouter();

  return (
    <>
      <S.Title>{router.query.season} Season</S.Title>
      <S.Container>
        <Link href={`/seasons/drivers/${router.query.season}`}>
          <S.Box>Drivers</S.Box>
        </Link>
        <S.Box>Races</S.Box>
        <Link href={`/seasons/driverStanding/${router.query.season}`}>
          <S.Box>Driver Standings</S.Box>
        </Link>
        <S.Box>Constructor Standings</S.Box>
      </S.Container>
    </>
  );
}
