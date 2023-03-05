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
import { topPointDriver, topWinDriver } from "@/utils/chartDataConvert";
import { MIN_NUM_DRIVER } from "@/constants/constants";
import { TiMinusOutline, TiPlusOutline } from "react-icons/ti";

export default function BoxChart({ result }: any) {
  const [driverNum, setDriverNum] = useState(3);
  const topPointData = topPointDriver(result).slice(0, driverNum);
  const topWinData = topWinDriver(result).slice(0, driverNum);
  const MAX_NUM_DRIVER = result.length;

  const handleAddNum = () => {
    if (driverNum < MAX_NUM_DRIVER) {
      setDriverNum((prev) => prev + 1);
    }
  };

  const handleMinusNum = () => {
    if (driverNum > MIN_NUM_DRIVER) {
      setDriverNum((prev) => prev - 1);
    }
  };

  return (
    <S.ChartContainer>
      <S.ButtonWrap>
        <S.Button onClick={handleAddNum}>
          <TiPlusOutline size={30} fill="#616161" />
        </S.Button>
        <S.Num>{driverNum}</S.Num>
        <S.Button onClick={handleMinusNum}>
          <TiMinusOutline size={30} fill="#616161" />
        </S.Button>
      </S.ButtonWrap>

      <S.ChartWrap>
        <S.ChartTitle>Rank of Wins</S.ChartTitle>
        <BarChart
          width={400}
          height={200}
          data={topWinData}
          style={{ fontSize: "13px" }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <Tooltip />
          <Legend />
          <YAxis />
          <Bar dataKey="wins" fill="#b2b475">
            <LabelList dataKey="wins" />
          </Bar>
        </BarChart>
      </S.ChartWrap>
      <S.ChartWrap>
        <S.ChartTitle>Rank of Points</S.ChartTitle>
        <BarChart
          width={400}
          height={200}
          data={topPointData}
          style={{ fontSize: "13px" }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <Tooltip />
          <Legend />
          <YAxis />
          <Bar dataKey="points" fill="#840e0e">
            <LabelList dataKey="points" />
          </Bar>
        </BarChart>
      </S.ChartWrap>
    </S.ChartContainer>
  );
}
