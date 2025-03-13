/* eslint-disable react/prop-types */
import React from "react";

import Dialog from "../components/Dialog";
import FilterTable from "./FilterTable";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";

const HistoryTable = ({ data }) => {
  const finalResult = data.map((item, idx) => ({
    id: item.item_id,
    Vendor: item.vendor,
    "Vendor Amount": item.billamount,
    Date: item.billdate,
  }));

  console.log(finalResult);
  const columns = [
    { field: "Vendor", headerName: "Vendor", width: 150 },
    { field: "Vendor Amount", headerName: "Vendor Amount", width: 150 },
    { field: "Date", headerName: "Date", width: 150 },
    {
      field: "Delete",
      headerName: "Delete",
      width: 150,
      renderCell: (params) => (
        <Dialog
          itemId={params.row.id}
          onDelete={() => handleDelete(item.item_id)}
        />
      ),
    },
  ];
  return (
    <>
      <div className="">
        <div className="flex justify-center ">
          {data.length > 0 ? (
            <>
              <div className="w-full">
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
    </>
  );
};

export default HistoryTable;
