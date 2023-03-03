import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { chartDataConvert } from "@/utils/chartDataConvert";

export default function BoxChart({ result }: any) {
  console.log(result);
  const data = chartDataConvert(result);
  console.log(data);
  return (
    <div>
      바차트임
      <BarChart width={400} height={200} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <Tooltip />
        <Legend />
        <YAxis />
        <Bar dataKey="wins" fill="#2e0707">
          <LabelList dataKey="wins" />
        </Bar>
      </BarChart>
      <BarChart width={400} height={200} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <Tooltip />
        <Legend />
        <YAxis />
        <Bar dataKey="points" fill="#840e0e">
          <LabelList dataKey="points" />
        </Bar>
      </BarChart>
    </div>
  );
}
