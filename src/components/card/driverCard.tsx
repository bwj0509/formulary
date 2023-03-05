import * as S from "@/components/card/driverCard.style";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Link from "next/link";

export default function DriverCard({ driver, key }) {
  const index = driver.position.padStart(2, 0);
  const driverName = driver.Driver.givenName + " " + driver.Driver.familyName;
  const team = driver.Constructors[0].name;
  const nationality = driver.Driver.nationality;
  const moreInfoUrl = driver.Driver.url.replace();
  const birth = driver.Driver.dateOfBirth;

  return (
    <S.Wrap>
      <S.Title>
        <S.Index>{index}</S.Index>
        <S.MoreInfo>
          <Link href={moreInfoUrl} target="_blank" rel="noopener noreferrer">
            <AiOutlineInfoCircle size={20} />
          </Link>
        </S.MoreInfo>
      </S.Title>

      <S.Name>
        {driverName}
        <S.Birth>{birth}</S.Birth>
      </S.Name>
      <S.Constructor>{team}</S.Constructor>
      <S.Nation>{nationality}</S.Nation>
    </S.Wrap>
  );
}
