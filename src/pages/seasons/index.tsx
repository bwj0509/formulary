/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useRef } from "react";
import * as S from "@/styles/seasons.style";
import { MAX_PAGE } from "@/constants/constants";
import { getSeasons } from "@/apis/api/seasons";
import Link from "next/link";

interface SeasonData {
  season: string;
  url: string;
}

export default function Seasons() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const target = useRef(null);
  const skeletonArr = Array.from({ length: 12 }, (_, index) => index + 1);
  useEffect(() => {
    getSeasonsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    console.log(page);
  }, [page]);

  const getSeasonsData = async () => {
    const data = await getSeasons(page);
    setData((prev) => [...prev, ...data]);
    setLoading(false);
  };

  const callbackFunction = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting && page < MAX_PAGE) {
      setPage((prev) => page + 20);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const options = {
    root: null,
    threshold: 0.7,
  };

  useEffect(() => {
    console.log("useEffect 실행!");
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
    return (
      <S.Wrap>
        {skeletonArr.map((_, index) => (
          <S.SkeltonBox key={index}>Loading...</S.SkeltonBox>
        ))}
      </S.Wrap>
    );
  }

  return (
    <S.Wrap>
      {data.map((season: SeasonData, index: number) => (
        <div key={index}>
          <Link href={`/seasons/${season.season}`}>
            <S.Box>{season.season}</S.Box>
          </Link>
        </div>
      ))}
      <S.SkeltonBox page={page}>Loading...</S.SkeltonBox>
      <S.SkeltonBox page={page} ref={target}>
        Loading...
      </S.SkeltonBox>
    </S.Wrap>
  );
}
