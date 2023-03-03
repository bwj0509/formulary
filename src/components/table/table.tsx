import * as S from "@/components/table/table.style";
import { Driver } from "@/type";
import Link from "next/link";
import { AiOutlineInfoCircle } from "react-icons/ai";

interface TableProps {
  drivers: Driver[];
}

export default function Table({ drivers }) {
  console.log(drivers);
  const name = drivers.givenName + drivers.familyName;
  console.log();
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Nationality</th>
          <th>Birth</th>
          <th>More</th>
        </tr>
      </thead>
      <tbody>
        {drivers.map((driver: Driver, index: number) => (
          <tr key={index}>
            <td>
              {driver.givenName} {driver.familyName}
            </td>
            <td>{driver.nationality}</td>
            <td>{driver.dateOfBirth}</td>
            <S.Std>
              <Link href={driver.url} target="_blank" rel="noopener noreferrer">
                <AiOutlineInfoCircle />
              </Link>
            </S.Std>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
