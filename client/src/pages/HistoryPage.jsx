import React from "react";
import Navbar from "../components/Navbar";
import HistoryTable from "../components/HistoryTable";
import { useState, useEffect } from "react";
import supabase from "../../supaBaseData";

const HistoryPage = () => {
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
      <HistoryTable data={items} />
    </>
  );
};

export default HistoryPage;
