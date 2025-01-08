import React from "react";
import { useState, useEffect } from "react";
import supabase from "../../supaBaseData";
("use client");
import {
  AreaChart,
  Area,
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
        <AreaChart width={800} height={400} data={items}>
          <YAxis />
          <XAxis dataKey="billdate" />
          <CartesianGrid />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="billamount" />
        </AreaChart>
      </div>
    </>
  );
};

export default Chart;
