import React from "react";
import Navbar from "../components/Navbar";
import FormTable from "../components/FormTable";
import Chart from "../components/Chart";
import { useState, useEffect } from "react";
import supabase from "../../supaBaseData";
import CurrentTable from "../components/CurrentTable";
import Spinner from "../components/Spinner";
import MonthList from "../components/MonthList";
import { useParams, useNavigate } from "react-router-dom";
import getMonth from "../getMonth";
import { getMonthNumber } from "../getMonth";
import { ContinuousColorLegend } from "@mui/x-charts";
const HomePage = () => {
  const { month } = useParams();
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getHistory = async () => {
      setLoading(true); // Start loading
      try {
        if (month) {
          const monthMapping = {
            January: "01",
            February: "02",
            March: "03",
            April: "04",
            May: "05",
            June: "06",
            July: "07",
            August: "08",
            September: "09",
            October: "10",
            November: "11",
            December: "12",
          };

          const monthValue = monthMapping[month] || null;

          if (monthValue) {
            const { data, error } = await supabase.rpc("filter_by_month", {
              month_num: parseInt(monthValue, 10),
            });

            if (error) {
              console.error("Error fetching data by month:", error);
            } else {
              setItems(data);
            }
          }
        } else {
          const current = getMonthNumber();
          const { data, error } = await supabase.rpc("filter_by_month", {
            month_num: parseInt(current, 10),
          });

          if (error) {
            console.error("Error fetching all data:", error);
          } else {
            setItems(data);
          }
        }
      } catch (error) {
        console.error("Unexpected error:", error);
      } finally {
        setLoading(false); // Ensure loading stops regardless of success or failure
      }
    };

    getHistory(); // Ensure the function is called
  }, [refresh, month]);

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
