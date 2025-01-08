import React from "react";
import Navbar from "../components/Navbar";
import FormTable from "../components/FormTable";
import HistoryTable from "../components/HistoryTable";
import Chart from "../components/Chart";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <FormTable />
      <Chart />
      <HistoryTable />
    </>
  );
};

export default HomePage;
