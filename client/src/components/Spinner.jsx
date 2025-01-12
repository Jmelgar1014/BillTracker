/* eslint-disable react/prop-types */
import React from "react";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Spinner = ({ size }) => {
  return (
    <div className="flex justify-center mb-16">
      <Box sx={{ display: "flex" }} className="mt-16">
        <CircularProgress size={size} />
      </Box>
    </div>
  );
};

export default Spinner;
