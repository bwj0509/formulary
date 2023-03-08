import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getStandingByYear } from "@/apis/api/seasons";
import Table from "@/components/table/table";
import * as S from "@/styles/year.style";
import BoxChart from "@/components/chart/boxChart";

export default function Year() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const year = router.query.year;
  useEffect(() => {
    if (year) {
      getStandingByYear(Number(router.query.year)).then((res) => {
        setResult(res);
        setLoading(false);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [year]);

  if (loading) {
    return <div>로딩중...</div>;
  }
  return (
    <S.TableWrap>
      <BoxChart result={result}></BoxChart>
      <Table result={result} />
    </S.TableWrap>
  );
}
