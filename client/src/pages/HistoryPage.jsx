import React from "react";
import Navbar from "../components/Navbar";
import HistoryTable from "../components/HistoryTable";
import { useState, useEffect } from "react";
import supabase from "../../supaBaseData";
import Spinner from "../components/Spinner";

const HistoryPage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getHistory = async () => {
      const { data, error } = await supabase.from("row_items").select();

      if (data) {
        setItems(data);
        setLoading(false);
      } else {
        console.log("The following error occurred: " + error);
      }
    };
    getHistory();
  }, []);

  return (
    <>
      <Navbar />
      {loading ? <Spinner /> : <HistoryTable data={items} />}
    </>
  );
};

export default HistoryPage;
