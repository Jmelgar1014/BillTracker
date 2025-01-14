import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const MonthList = () => {
  const [month, setMonth] = React.useState("");

  const handleChange = (event) => {
    setMonth(event.target.value);
  };
  return (
    <div className="w-32 ml-4">
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
