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
import Dialog from "../components/Dialog";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
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

  const finalResult = items.map((item, idx) => ({
    id: item.item_id,
    Vendor: item.vendor,
    "Vendor Amount": item.billamount,
    Date: item.billdate,
  }));

  console.log(finalResult);
  const handleDelete = (itemId) => {
    // Update state to remove deleted item
    setItems((prevItems) =>
      prevItems.filter((item) => item.item_id !== itemId)
    );
  };
  const columns = [
    { field: "Vendor", headerName: "Vendor", width: 150 },
    { field: "Vendor Amount", headerName: "Amount", width: 125 },
    { field: "Date", headerName: "Date", width: 110 },
    {
      field: "Delete",
      headerName: "Delete",
      width: 125,
      renderCell: (params) => (
        <div className="flex justify-center items-center">
          <div className="flex justify-center bg-black h-6 items-center rounded-md mt-4">
            <Dialog
              itemId={params.row.id}
              onDelete={() => handleDelete(params.row.id)}
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <Navbar />
      {loading ? <Spinner size="60px" /> : <FormTable onSub={handleRefresh} />}
      {loading ? <Spinner size="60px" /> : <Chart data={items} />}
      {loading ? (
        <Spinner size="60px" />
      ) : (
        <div className="">
          <div className=" flex-col sm:flex sm:justify-center ">
            <MonthList />
            {items.length > 0 ? (
              <>
                <div className="w-screen mt-20 sm:w-6/12 sm:flex sm:justify-center sm:mt-20">
                  <div style={{ height: 500, width: "100%" }}>
                    <DataGrid rows={finalResult} columns={columns} />
                  </div>
                </div>
              </>
            ) : (
              "Submit information to display here."
            )}{" "}
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;
