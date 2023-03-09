import * as S from "@/components/race/nextRace.style";

export default function NextRaceSkeleton() {
  return (
    <S.SkeletonContainer>
      <S.Round>{`ROUND ? - UP NEXT`}</S.Round>
      <S.RaceDateContainer>
        <S.RaceDate>
          <S.RaceDateRange>{`?? - ??`}</S.RaceDateRange>
          <S.RaceDay>???</S.RaceDay>
        </S.RaceDate>
        <S.Img
          src="/images/saudi.png"
          alt="saudi"
          width={48}
          height={27}
        ></S.Img>
      </S.RaceDateContainer>
      <S.RaceName>Loading...</S.RaceName>
      <S.RaceFullName>{`FORMULA 1 STC 2023`}</S.RaceFullName>
      <S.Clock>
        00
        <S.Small> day</S.Small>
        00
        <S.Small> hour</S.Small>
        00
        <S.Small> min</S.Small>
        00
        <S.Small> sec</S.Small>
      </S.Clock>
      <S.ScheduleContainer>
        <S.ScheduleWrap>
          <S.SessionName>PRACTICE 1</S.SessionName>
          <S.SessionDay>FRI</S.SessionDay>
          <S.SessionTime>00:00</S.SessionTime>
        </S.ScheduleWrap>
        <S.ScheduleWrap>
          <S.SessionName>PRACTICE 2</S.SessionName>
          <S.SessionDay>SAT</S.SessionDay>
          <S.SessionTime>00:00</S.SessionTime>
        </S.ScheduleWrap>
        <S.ScheduleWrap bottomLine bottomMargin>
          <S.SessionName>PRACTICE 3</S.SessionName>
          <S.SessionDay>SAT</S.SessionDay>
          <S.SessionTime>00:00</S.SessionTime>
        </S.ScheduleWrap>
        <S.ScheduleWrap>
          <S.SessionName>Qualifying</S.SessionName>
          <S.SessionDay>SUN</S.SessionDay>
          <S.SessionTime>00:00</S.SessionTime>
        </S.ScheduleWrap>
        <S.ScheduleWrap>
          <S.SessionName>Race</S.SessionName>
          <S.SessionDay>MON</S.SessionDay>
          <S.SessionTime>00:00</S.SessionTime>
        </S.ScheduleWrap>
      </S.ScheduleContainer>
    </S.SkeletonContainer>
  );
}
