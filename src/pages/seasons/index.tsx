/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useRef } from "react";
import * as S from "@/pages/seasons/seasons.style";
import { MAX_PAGE } from "@/constants/constants";
import { getSeasons } from "@/apis/api/seasons";

interface SeasonData {
  season: string;
  url: string;
}

export default function MenuItem() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const target = useRef(null);

  useEffect(() => {
    getSeasonsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const getSeasonsData = async () => {
    const data = await getSeasons(page);
    setData((prev) => [...prev, ...data]);
    setLoading(false);
  };

  const callbackFunction = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting && page < MAX_PAGE) {
      setPage(page + 10);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (target.current) {
      observer.observe(target.current);
    }
    return () => {
      if (target.current) {
        observer.unobserve(target.current);
      }
    };
  }, [target, options]);

  if (loading) {
    return <div>로딩중입니다.</div>;
  }

  return (
    <S.Wrap>
      {data.map((season: SeasonData) => (
        <div key={season.season}>
          <S.Box>{season.season}</S.Box>
        </div>
      ))}
      <S.Target ref={target}>타켓요소</S.Target>
    </S.Wrap>
  );
}
