import * as S from "@/components/table/table.style";
import { RiMedalFill } from "react-icons/ri";

export default function Table({ result }) {
  return (
    <S.Table>
      <S.Thead>
        <S.Tr>
          <S.Th padding="10px">#</S.Th>
          <S.Th padding="10px">Name</S.Th>
          <S.Th padding="10px">Team</S.Th>
          <S.Th padding="10px">Points</S.Th>
          <S.Th padding="10px">Wins</S.Th>
        </S.Tr>
      </S.Thead>
      <tbody>
        {result.map((driver: any, index: number) => {
          const driverName =
            driver.Driver.givenName + " " + driver.Driver.familyName;
          const team = driver.Constructors[0].name;
          const position = driver.position;
          const points = driver.points;
          const wins = driver.wins;
          return (
            <S.Tr key={index}>
              <S.Td align="center">
                {position === "1" ? (
                  <RiMedalFill fill="#ffd700" />
                ) : position === "2" ? (
                  <RiMedalFill fill="#c0c0c0" />
                ) : position === "3" ? (
                  <RiMedalFill fill="#725240" />
                ) : (
                  position
                )}
              </S.Td>
              <S.Td>{driverName}</S.Td>
              <S.Td>{team}</S.Td>
              <S.Td align="right">{points}</S.Td>
              <S.Td align="right">{wins}</S.Td>
            </S.Tr>
          );
        })}
      </tbody>
    </S.Table>
  );
}
