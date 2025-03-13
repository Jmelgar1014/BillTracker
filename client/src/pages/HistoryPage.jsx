import React from "react";
import Navbar from "../components/Navbar";
import HistoryTable from "../components/HistoryTable";
import { useState, useEffect } from "react";
import supabase from "../../supaBaseData";
import Spinner from "../components/Spinner";
import Dialog from "../components/Dialog";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
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

      {loading ? (
        <Spinner size="120px" />
      ) : (
        <div className="">
          <div className="flex justify-center ">
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

export default HistoryPage;
