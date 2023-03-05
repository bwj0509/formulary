import * as S from "@/components/table/table.style";

export default function Table({ result }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Team</th>
          <th>Points</th>
          <th>Wins</th>
        </tr>
      </thead>
      <tbody>
        {result.map((driver: any, index: number) => {
          const driverName =
            driver.Driver.givenName + " " + driver.Driver.familyName;
          const team = driver.Constructors[0].name;
          const position = driver.position;
          const points = driver.points;
          const wins = driver.wins;
          return (
            <tr key={index}>
              <S.Td>{position}</S.Td>
              <S.Td>{driverName}</S.Td>
              <S.Td>{team}</S.Td>
              <S.Td>{points}</S.Td>
              <S.Td>{wins}</S.Td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
