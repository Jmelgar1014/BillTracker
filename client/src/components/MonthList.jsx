/* eslint-disable react/prop-types */
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useParams, useNavigate } from "react-router-dom";

const MonthList = () => {
  const [month, setMonth] = React.useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    const selectedMonth = event.target.value;
    setMonth(selectedMonth);
    navigate(`/home/${selectedMonth}`); // Replace `/your-base-url/` with your desired base URL.
  };
  return (
    <div className="w-32 ml-4 mt-8">
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Month</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={month}
            label="Month"
            onChange={handleChange}
          >
            <MenuItem value={"January"}>January</MenuItem>
            <MenuItem value={"February"}>February</MenuItem>
            <MenuItem value={"March"}>March</MenuItem>
            <MenuItem value={"April"}>April</MenuItem>
            <MenuItem value={"May"}>May</MenuItem>
            <MenuItem value={"June"}>June</MenuItem>
            <MenuItem value={"July"}>July</MenuItem>
            <MenuItem value={"August"}>August</MenuItem>
            <MenuItem value={"September"}>September</MenuItem>
            <MenuItem value={"October"}>October</MenuItem>
            <MenuItem value={"November"}>November</MenuItem>
            <MenuItem value={"December"}>December</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default MonthList;
