import React, { useState } from "react";
import * as S from "@/components/chart/boxChart.style";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
} from "recharts";
import {
  topPointConstructor,
  topWinsConstructor,
} from "@/utils/chartDataConvert";
import { MIN_NUM_DRIVER } from "@/constants/constants";
import { TiMinusOutline, TiPlusOutline } from "react-icons/ti";

export default function BoxChart({ result }: any) {
  const [constructorNum, setConstructorNum] = useState(3);
  const MAX_NUM_CONSTRUCTOR = result.length;
  const handleAddNum = () => {
    if (constructorNum < MAX_NUM_CONSTRUCTOR) {
      setConstructorNum((prev) => prev + 1);
    }
  };

  const handleMinusNum = () => {
    if (constructorNum > MIN_NUM_DRIVER) {
      setConstructorNum((prev) => prev - 1);
    }
  };
  const topPointsData = topPointConstructor(result).slice(0, constructorNum);
  const topWinsData = topWinsConstructor(result).slice(0, constructorNum);
  return (
    <S.ChartContainer>
      <S.ButtonWrap>
        <S.Button onClick={handleAddNum}>
          <TiPlusOutline size={30} fill="#616161" />
        </S.Button>
        <S.Num>{constructorNum}</S.Num>
        <S.Button onClick={handleMinusNum}>
          <TiMinusOutline size={30} fill="#616161" />
        </S.Button>
      </S.ButtonWrap>

      <S.ChartWrap>
        <S.ChartTitle>Rank of Points</S.ChartTitle>
        <BarChart
          width={380}
          height={200}
          data={topPointsData}
          style={{ fontSize: "13px" }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="constructor" />
          <Tooltip />
          <Legend />
          <YAxis />
          <Bar dataKey="points" fill="#840e0e">
            <LabelList dataKey="points" />
          </Bar>
        </BarChart>
      </S.ChartWrap>
      <S.ChartWrap>
        <S.ChartTitle>Rank of Wins</S.ChartTitle>
        <BarChart
          width={380}
          height={200}
          data={topWinsData}
          style={{ fontSize: "13px" }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="constructor" />
          <Tooltip />
          <YAxis />
          <Legend align="center" />

          <Bar dataKey="wins" fill="#b2b475">
            <LabelList dataKey="wins" />
          </Bar>
        </BarChart>
      </S.ChartWrap>
    </S.ChartContainer>
  );
}
