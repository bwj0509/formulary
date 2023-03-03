import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getDriverByYear } from "@/apis/api/seasons";
import Table from "@/components/table/table";
import * as S from "@/styles/year.style";

export default function Year() {
  const [drivers, setDrivers] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  console.log(router.query.year);
  useEffect(() => {
    getDriverByYear(Number(router.query.year)).then((res) => {
      setDrivers(res);
      setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <div>로딩중...</div>;
  }

  return (
    <S.TableWrap>
      <Table drivers={drivers} />
    </S.TableWrap>
  );
}
