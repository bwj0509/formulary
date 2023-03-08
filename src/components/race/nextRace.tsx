import * as S from "@/components/race/nextRace.style";

export default function NextRace() {
  return (
    <S.Container>
      <S.Round>ROUND 2 - UP NEXT</S.Round>
      <S.RaceDateContainer>
        <S.RaceDate>
          <S.RaceDateRange>17 - 19</S.RaceDateRange>
          <S.RaceDay>MAR</S.RaceDay>
        </S.RaceDate>
        <S.Img
          src="/images/saudi.png"
          alt="saudi"
          width={48}
          height={27}
        ></S.Img>
      </S.RaceDateContainer>
      <S.RaceName>Saudi Arabia</S.RaceName>
      <S.RaceFullName>
        FORMULA 1 STC SAUDI ARABIAN GRAND PRIX 2023
      </S.RaceFullName>
      <S.Clock>
        03<S.Small> day</S.Small>
        00<S.Small> hour</S.Small>
        00<S.Small> min</S.Small>
        00<S.Small> sec</S.Small>
      </S.Clock>
      <S.ScheduleContainer>
        <S.ScheduleWrap>
          <S.SessionName>PRACTICE 1</S.SessionName>
          <S.SessionDay>FRI</S.SessionDay>
          <S.SessionTime>20:00</S.SessionTime>
        </S.ScheduleWrap>
        <S.ScheduleWrap>
          <S.SessionName>PRACTICE 2</S.SessionName>
          <S.SessionDay>FRI</S.SessionDay>
          <S.SessionTime>20:00</S.SessionTime>
        </S.ScheduleWrap>
        <S.ScheduleWrap>
          <S.SessionName>PRACTICE 3</S.SessionName>
          <S.SessionDay>FRI</S.SessionDay>
          <S.SessionTime>20:00</S.SessionTime>
        </S.ScheduleWrap>
        <S.Hr />
        <S.ScheduleWrap>
          <S.SessionName>PRACTICE 3</S.SessionName>
          <S.SessionDay>FRI</S.SessionDay>
          <S.SessionTime>20:00</S.SessionTime>
        </S.ScheduleWrap>
        <S.ScheduleWrap>
          <S.SessionName>RACE</S.SessionName>
          <S.SessionDay>FRI</S.SessionDay>
          <S.SessionTime>20:00</S.SessionTime>
        </S.ScheduleWrap>
      </S.ScheduleContainer>
    </S.Container>
  );
}
