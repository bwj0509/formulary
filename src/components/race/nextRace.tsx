import * as S from "@/components/race/nextRace.style";
import { getMonthName } from "@/utils/getMonth";
import { getDay } from "@/utils/getDay";
import { useState, useEffect } from "react";
import { calculateRemainTime } from "@/utils/calculateRemainTime";
import { getDate } from "@/utils/getDate";
import { getTime } from "@/utils/getTime";

export default function NextRace({ nextRace }) {
  const {
    round,
    date,
    Circuit,
    raceName,
    time,
    FirstPractice,
    SecondPractice,
    ThirdPractice,
    Qualifying,
  } = nextRace;

  // const startDate = FirstPractice.date.split("-")[2];
  const startDate = getDate(`${FirstPractice.date}:${FirstPractice.time}`);
  const endDate = getDate(`${date}:${time}`);
  const monthName = getMonthName(date);
  const [remainTime, setRemainTime] = useState(
    calculateRemainTime(new Date(), new Date(`${date}:${time}`))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainTime(
        calculateRemainTime(new Date(), new Date(`${date}:${time}`))
      );
    }, 1000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.Container>
      <S.Round>{`ROUND ${round} - UP NEXT`}</S.Round>
      <S.RaceDateContainer>
        <S.RaceDate>
          <S.RaceDateRange>{`${startDate} - ${endDate}`}</S.RaceDateRange>
          <S.RaceDay>{monthName}</S.RaceDay>
        </S.RaceDate>
        <S.Img
          src="/images/australia.jpg"
          alt="saudi"
          width={48}
          height={27}
        ></S.Img>
      </S.RaceDateContainer>
      <S.RaceName>{Circuit.Location.country}</S.RaceName>
      <S.RaceFullName>{`FORMULA 1 STC ${raceName} 2023`}</S.RaceFullName>
      <S.Clock>
        {remainTime[0].toString().padStart(2, "0")}
        <S.Small> day</S.Small>
        {remainTime[1].toString().padStart(2, "0")}
        <S.Small> hour</S.Small>
        {remainTime[2].toString().padStart(2, "0")}
        <S.Small> min</S.Small>
        {remainTime[3].toString().padStart(2, "0")}
        <S.Small> sec</S.Small>
      </S.Clock>
      <S.ScheduleContainer>
        <S.ScheduleWrap>
          <S.SessionName>PRACTICE 1</S.SessionName>
          <S.SessionDay>
            {getDay(`${FirstPractice.date}:${FirstPractice.time}`)}
          </S.SessionDay>
          <S.SessionTime>
            {getTime(`${FirstPractice.date}:${FirstPractice.time}`)}
          </S.SessionTime>
        </S.ScheduleWrap>
        <S.ScheduleWrap>
          <S.SessionName>PRACTICE 2</S.SessionName>
          <S.SessionDay>
            {getDay(`${SecondPractice.date}:${SecondPractice.time}`)}
          </S.SessionDay>
          <S.SessionTime>
            {getTime(`${SecondPractice.date}:${SecondPractice.time}`)}
          </S.SessionTime>
        </S.ScheduleWrap>
        <S.ScheduleWrap bottomLine bottomMargin>
          <S.SessionName>PRACTICE 3</S.SessionName>
          <S.SessionDay>
            {getDay(`${ThirdPractice.date}:${ThirdPractice.time}`)}
          </S.SessionDay>
          <S.SessionTime>
            {getTime(`${ThirdPractice.date}:${ThirdPractice.time}`)}
          </S.SessionTime>
        </S.ScheduleWrap>
        <S.ScheduleWrap>
          <S.SessionName>Qualifying</S.SessionName>
          <S.SessionDay>
            {getDay(`${Qualifying.date}:${Qualifying.time}`)}
          </S.SessionDay>
          <S.SessionTime>
            {getTime(`${Qualifying.date}:${Qualifying.time}`)}
          </S.SessionTime>
        </S.ScheduleWrap>
        <S.ScheduleWrap>
          <S.SessionName>Race</S.SessionName>

          <S.SessionDay>{getDay(`${date}:${time}`)}</S.SessionDay>
          <S.SessionTime>{getTime(`${date}:${time}`)}</S.SessionTime>
        </S.ScheduleWrap>
      </S.ScheduleContainer>
    </S.Container>
  );
}
