/* eslint-disable react/prop-types */
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const FilterTable = () => {
  const columns = [
    { field: "Vendor", headerName: "Vendor", width: 150 },
    { field: "Vendor Amount", headerName: "Vendor Amount", width: 150 },
    { field: "Date", headerName: "Date", width: 150 },
  ];
  return (
    <>
      <div style={{ height: 300, width: "100%" }}>
        <DataGrid />
      </div>
    </>
  );
};

export default FilterTable;
