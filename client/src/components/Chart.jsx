/* eslint-disable react/prop-types */
import React from "react";
import { useParams } from "react-router-dom";
("use client");
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import getMonth from "../getMonth";

const Chart = ({ data }) => {
  const { month } = useParams();
  return (
    <>
      <div className="flex justify-center mt-12">
        {month ? (
          <h1 className="text-3xl">{month} 2025</h1>
        ) : (
          <h1 className="text-3xl">{getMonth()} 2025</h1>
        )}
      </div>
      <div className="flex justify-center mt-14">
        <BarChart width={800} height={400} data={data}>
          <YAxis />
          <XAxis dataKey="vendor" />
          <CartesianGrid />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar type="monotone" dataKey="billamount" />
        </BarChart>
      </div>
    </>
  );
};

export default Chart;

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-slate-300 flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg">{label}</p>
        <p className="text-sm text-blue-400">
          BillAmount:
          <span className="ml-2">${payload[0].value}</span>
        </p>
      </div>
    );
  }
};
