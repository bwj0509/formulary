import * as S from "@/components/race/nextRace.style";
import { getMonthName } from "@/utils/getMonth";

export default function NextRace({ nextRace }) {
  console.log(nextRace);
  const { round, FirstPractice, date, Circuit, raceName } = nextRace;
  const startDate = FirstPractice.date.split("-")[2];
  const endDate = date.split("-")[2];
  const day = getMonthName(date);

  return (
    <S.Container>
      <S.Round>{`ROUND ${round} - UP NEXT`}</S.Round>
      <S.RaceDateContainer>
        <S.RaceDate>
          <S.RaceDateRange>{`${startDate} - ${endDate}`}</S.RaceDateRange>
          <S.RaceDay>{day}</S.RaceDay>
        </S.RaceDate>
        <S.Img
          src="/images/saudi.png"
          alt="saudi"
          width={48}
          height={27}
        ></S.Img>
      </S.RaceDateContainer>
      <S.RaceName>{Circuit.Location.country}</S.RaceName>
      <S.RaceFullName>{`FORMULA 1 STC ${raceName} 2023`}</S.RaceFullName>
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
        <S.ScheduleWrap bottomLine bottomMargin>
          <S.SessionName>PRACTICE 3</S.SessionName>
          <S.SessionDay>FRI</S.SessionDay>
          <S.SessionTime>20:00</S.SessionTime>
        </S.ScheduleWrap>
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
