import * as S from "@/components/table/table.style";
import { Driver } from "@/type";
import Link from "next/link";
import { AiOutlineInfoCircle } from "react-icons/ai";

export default function Table({ result }) {
  console.log(result);
  return (
    <table>
      <thead>
        <tr>
          <th>Index</th>
          <th>Name</th>
          <th>Team</th>
          <th>Nationality</th>
          <th>More</th>
        </tr>
      </thead>
      <tbody>
        {result.map((driver: any, index: number) => {
          const driverName =
            driver.Driver.givenName + " " + driver.Driver.familyName;
          const team = driver.Constructors[0].name;
          const nationality = driver.Driver.nationality;
          const moreInfoUrl = driver.Driver.url;
          return (
            <tr key={index}>
              <S.Td>{index + 1}</S.Td>
              <S.Td>{driverName}</S.Td>
              <S.Td>{team}</S.Td>
              <S.Td>{nationality}</S.Td>
              <S.Td>
                <Link
                  href={moreInfoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineInfoCircle />
                </Link>
              </S.Td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
