import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getStandingByYear } from "@/apis/api/seasons";
import Table from "@/components/table/table";
import * as S from "@/styles/year.style";

export default function Year() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  console.log(router.query.year);
  useEffect(() => {
    getStandingByYear(Number(router.query.year)).then((res) => {
      setResult(res);
      setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <div>로딩중...</div>;
  }
  return (
    <S.TableWrap>
      <S.TitleContainer>
        <div>
          <div>Season</div>
          <div>2020</div>
        </div>
        <div>
          <div>Drivers</div>
          <div>22</div>
        </div>
        <div>
          <div>Nationality</div>
          <div>10</div>
        </div>
        <div>
          <div>Races</div>
          <div>25</div>
        </div>
        <div>
          <div>Constructs</div>
          <div>10</div>
        </div>
      </S.TitleContainer>
      <Table result={result} />
    </S.TableWrap>
  );
}
