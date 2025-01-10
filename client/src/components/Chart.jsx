/* eslint-disable react/prop-types */
import React from "react";
import { useState, useEffect } from "react";
import supabase from "../../supaBaseData";
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

const Chart = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data, error } = await supabase.from("row_items").select();

      if (data) {
        setItems(data);
      }
    };
    getData();
  }, [items]);

  //console.log(intItems);

  // Debugging logs

  return (
    <>
      <div className="flex justify-center mt-14">
        <BarChart width={800} height={400} data={items}>
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
