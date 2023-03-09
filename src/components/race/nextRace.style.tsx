import styled from "styled-components";
import Image from "next/image";
import saudibg from "/images/saudibg.jpg";

export const Container = styled.main`
  width: 100%;
  background-color: #15151e;
  color: white;
  padding: 10px;
  text-align: left;
  margin-bottom: 20px;
`;

export const Round = styled.div`
  font-size: 12px;
  color: #e10600;
  font-weight: 700;
  line-height: 20px;
`;

export const RaceDateRange = styled.div`
  font-size: 18px;
  line-height: 24px;
`;

export const RaceDay = styled.div`
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 2px;
  background-color: #fff;
  margin-top: 3px;
  border-radius: 5px;
  color: #000;
  text-align: center;
  font-weight: bold;
`;

export const RaceDateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 15px;
  margin-bottom: 15px;
  border-bottom: 1px solid #949498;
`;

export const RaceDate = styled.div``;

export const RaceName = styled.h2`
  font-size: 22px;
`;

export const RaceFullName = styled.div`
  font-size: 12px;
  padding-bottom: 15px;
  margin-bottom: 15px;
  border-bottom: 1px solid #949498;
`;

export const Img = styled(Image)`
  border-radius: 5px;
`;

export const Clock = styled.div`
  font-size: 40px;
  text-align: center;
  padding-bottom: 15px;
  margin-bottom: 15px;
  border-bottom: 1px solid #949498;
`;

export const Small = styled.span`
  font-size: 12px;
  margin-right: 5px;
`;

export const ScheduleContainer = styled.div`
  padding: 15px;
  border-radius: 10px;
  background-color: #38383f;
`;
export const ScheduleWrap = styled.div<{ bottomLine?; bottomMargin? }>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 5px;
  border-bottom: ${(props) => props.bottomLine && "1px solid #949498"};
  margin-bottom: ${(props) => props.bottomMargin && "5px"};
`;

export const SessionName = styled.span`
  display: inline-block;
  width: 60%;
  font-size: 14px;
`;
export const SessionDay = styled.span`
  display: inline-block;
  width: 20%;
  font-size: 13px;
  color: #949498;
`;
export const SessionTime = styled.span`
  display: flex;
  justify-content: center;
  border-radius: 10px;
  background: #67676d;
  padding: 5px 10px;
  min-width: 80px;
  font-size: 13px;
`;
