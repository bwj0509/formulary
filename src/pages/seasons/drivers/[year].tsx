import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getStandingByYear } from "@/apis/api/seasons";
import Table from "@/components/table/table";
import * as S from "@/styles/year.style";
import axios from "axios";
import DriverCard from "@/components/card/driverCard";

export default function Year() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  console.log(router.query.year);
  useEffect(() => {
    getStandingByYear(Number(router.query.year)).then((res) => {
      setResult(res);
      setLoading(false);
      console.log(res);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <div>로딩중...</div>;
  }

  return (
    <S.CardContainer>
      {result.map((driver, index) => (
        <DriverCard key={index} driver={driver} />
      ))}
    </S.CardContainer>
  );
}
