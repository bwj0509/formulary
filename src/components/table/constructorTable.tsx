import * as S from "@/components/table/table.style";
import { RiMedalFill } from "react-icons/ri";

export default function ConstructorTable({ result }) {
  console.log(result);
  return (
    <S.Table>
      <S.Thead>
        <S.Tr>
          <S.Th padding="10px">#</S.Th>
          <S.Th padding="10px">Constructor</S.Th>
          <S.Th padding="10px">Points</S.Th>
          <S.Th padding="10px">Wins</S.Th>
        </S.Tr>
      </S.Thead>
      <tbody>
        {result.map((constructor: any, index: number) => {
          const constructorName = constructor.Constructor.name;
          const position = constructor.position;
          const points = constructor.points;
          const wins = constructor.wins;
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
              <S.Td>{constructorName}</S.Td>
              <S.Td align="right">{points}</S.Td>
              <S.Td align="right">{wins}</S.Td>
            </S.Tr>
          );
        })}
      </tbody>
    </S.Table>
  );
}
