import React from "react";
import Navbar from "../components/Navbar";
import FormTable from "../components/FormTable";
import HistoryTable from "../components/HistoryTable";
import Chart from "../components/Chart";
import { useState, useEffect } from "react";
import supabase from "../../supaBaseData";

const HomePage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getHistory = async () => {
      const { data, error } = await supabase.from("row_items").select();

      if (data) {
        setItems(data);
      } else {
        console.log("The following error occurred: " + error);
      }
    };
    getHistory();
  }, [items]);

  return (
    <>
      <Navbar />
      <FormTable />
      <Chart data={items} />
      <HistoryTable data={items} />
    </>
  );
};

export default HomePage;
