import React from "react";
import Navbar from "../components/Navbar";
import FormTable from "../components/FormTable";

import Chart from "../components/Chart";
import { useState, useEffect } from "react";
import supabase from "../../supaBaseData";
import CurrentTable from "../components/CurrentTable";
import Spinner from "../components/Spinner";

const HomePage = () => {
  const [items, setItems] = useState([]);
  const [refresh, setRefresh] = useState(false);
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
  }, [refresh]);

  const handleRefresh = () => {
    setRefresh((prev) => !prev);
  };

  return (
    <>
      <Navbar />
      {loading ? <Spinner size="60px" /> : <FormTable onSub={handleRefresh} />}
      {loading ? <Spinner size="60px" /> : <Chart data={items} />}
      {loading ? (
        <Spinner size="60px" />
      ) : (
        <CurrentTable data={items} refresh={handleRefresh} />
      )}
    </>
  );
};

export default HomePage;
