import { useRouter } from "next/router";
import * as S from "@/styles/season.style";
import Link from "next/link";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { ImNotification } from "react-icons/im";
export default function Season() {
  const router = useRouter();
  const season = router.query.season as string;

  const handleMovePrevPage = () => {
    if (Number(season) > 1950) {
      router.push(`/seasons/${Number(season) - 1}`);
    }
  };

  const handleMoveNextPage = () => {
    if (Number(season) < 2023) {
      router.push(`/seasons/${Number(season) + 1}`);
    }
  };

  return (
    <>
      <S.TitleContainer>
        <S.Title>{router.query.season} Season</S.Title>
        <S.MoveContainer>
          {season !== "1950" && (
            <S.PrevWrap onClick={handleMovePrevPage}>
              <GrFormPrevious size={25} />
              <S.Year>{Number(season) - 1}</S.Year>
            </S.PrevWrap>
          )}
          {season !== "2023" && (
            <S.NextWrap onClick={handleMoveNextPage}>
              <S.Year>{Number(season) + 1}</S.Year>
              <GrFormNext size={25} />
            </S.NextWrap>
          )}
        </S.MoveContainer>
      </S.TitleContainer>
      <S.Container>
        <Link href={`/seasons/drivers/${season}`}>
          <S.Box>Drivers</S.Box>
        </Link>
        <S.Box>Races</S.Box>
        <Link href={`/seasons/driverStanding/${season}`}>
          <S.Box>Driver Standings</S.Box>
        </Link>
        {Number(season) > 1957 ? (
          <Link href={`/seasons/constructorStanding/${season}`}>
            <S.Box>Constructor Standings</S.Box>
          </Link>
        ) : (
          <S.Box disable>
            <ImNotification size={30} fill="#ffe100" />
            <div>Constructor Standings</div>
            <S.Description>
              Information is not provided by the supplier.
            </S.Description>
          </S.Box>
        )}
      </S.Container>
    </>
  );
}
