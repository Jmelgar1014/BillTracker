import React from "react";
import Navbar from "../components/Navbar";
import FormTable from "../components/FormTable";

import Chart from "../components/Chart";
import { useState, useEffect } from "react";
import supabase from "../../supaBaseData";
import CurrentTable from "../components/CurrentTable";

const HomePage = () => {
  const [items, setItems] = useState([]);
  const [refresh, setRefresh] = useState(false);

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
  }, [refresh]);

  const handleRefresh = () => {
    setRefresh((prev) => !prev);
  };

  return (
    <>
      <Navbar />
      <FormTable onSub={handleRefresh} />
      <Chart data={items} />
      <CurrentTable data={items} refresh={handleRefresh} />
    </>
  );
};

export default HomePage;
