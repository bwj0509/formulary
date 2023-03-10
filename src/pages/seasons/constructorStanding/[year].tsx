import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getConstructorStandingByYear } from "@/apis/api/seasons";
import * as S from "@/styles/year.style";
import ConstructorTable from "@/components/table/constructorTable";
import PieCharts from "@/components/chart/boxChart2";
import Lottie from "lottie-react";
import { default as lottie } from "public/lottie/astronot.json";

export default function Year() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const year = router.query.year;
  useEffect(() => {
    if (year) {
      getConstructorStandingByYear(Number(router.query.year)).then((res) => {
        console.log(res);
        setResult(res);
        setLoading(false);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [year]);

  if (loading) {
    return <Lottie animationData={lottie} />;
  }
  return (
    <S.TableWrap>
      {/* <BoxChart result={result}></BoxChart> */}
      <PieCharts result={result} />
      <ConstructorTable result={result} />
    </S.TableWrap>
  );
}
